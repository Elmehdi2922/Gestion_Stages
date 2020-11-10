package com.example.abhoer_stage;

import android.app.ProgressDialog;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;

public class MainActivity2 extends AppCompatActivity {
    private ProgressDialog pDialog;
    private ListView lv;
    //URL of the JSON
    private static String url;
    public String v="au";
    public String xv="a";
    public String id;
    public int man=-1;
    ArrayList<HashMap<String ,String>> hashMaps;
    private static final String TAG = "HttpHandler";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);
        hashMaps = new ArrayList<>();
        lv = (ListView) findViewById(R.id.listView);
        adresseIp ad=new adresseIp();
        Log.d("mehdi","Tableau stage: ");
        Bundle extras = getIntent().getExtras();
        id= extras.getString("id");
        url=ad.getIp()+":8080/api/stages/get_stage_byStagiaire/"+id;

        lv.setOnItemClickListener(new AdapterView.OnItemClickListener(){
            @Override
            public void onItemClick(AdapterView<?> parent, View view,
                                    int position, long arg3) {
                Log.d("mehdi",url+"Tableau idbaa: "+position);
            }


        });

        new GetContacts().execute();
    }
    private class GetContacts extends AsyncTask<Void,Void,Void>
    {
        @Override
        protected void onPreExecute() {
            super.onPreExecute();
            //show loading dialog
            pDialog = new ProgressDialog(MainActivity2.this);
            pDialog.setMessage("loading...");
            pDialog.setCancelable(false);
        }

        @Override
        protected Void doInBackground(Void... voids)
        {
            HttpHandler ah = new HttpHandler();
            String jsonStr = ah.makeServiceCall(url);
            Log.e(TAG,"Response from url: "+jsonStr);
            if(jsonStr != null)
            {
                try {
                    JSONArray jsonObject= new JSONArray(jsonStr);
                    HashMap<String, String> hashMap = new HashMap<>();
                    hashMap.put("id","#");
                    hashMap.put("datedebut","Date debut" );
                    hashMap.put("datefin","Date fin");
                    hashMap.put("etat","Etat");
                    hashMaps.add(hashMap);
                    hashMap = new HashMap<>();
                    for(int i=0;i<jsonObject.length();i++)
                    {
                        JSONObject c=jsonObject.getJSONObject(i);
                        JSONObject stagiaire=c.getJSONObject("idstagiaire");

                        Log.d("mehdi","idstagiaire: "+c.getJSONObject("idstagiaire").toString());

                        Log.d("mehdi","id stage: "+id);
                        Log.d("mehdi","Tableau stage: "+stagiaire.getString("id"));

                        if(c.getString("etat").equals("valide"))
                        {
                            hashMap = new HashMap<>();

                            Log.d("mehdi","Tableau stage: "+stagiaire.getString("id"));
                            hashMap.put("id",""+c.getString("id"));
                            hashMap.put("datedebut",c.getString("datedebut"));
                            hashMap.put("datefin",c.getString("datefin"));
                            hashMap.put("etat",c.getString("etat"));
                            Log.e(TAG,"id: "+c.getString("id"));
                            //adding contact to contact list
                            hashMaps.add(hashMap);
                         }
                    }
                }catch(final JSONException e)
                {
                    Log.e(TAG,"JSON parsing error: "+e.getMessage());
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            Toast.makeText(MainActivity2.this,
                                    "JSON parsing error: "+e.getMessage(),
                                    Toast.LENGTH_SHORT).show();
                        }
                    });
                }
            } else {
                Log.e(TAG,"Couldn't get json from server.");
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        Toast.makeText(MainActivity2.this,
                                "Couldn't get json from server.",
                                Toast.LENGTH_SHORT).show();
                    }
                });
            }
            return null;
        }
        @Override
        protected void onPostExecute(Void aVoid)
        {
            super.onPostExecute(aVoid);
            //Dimmiss the dialog
            if(pDialog.isShowing())
            {
                pDialog.dismiss();
            }
            //updating json data to listview
            ListAdapter adapter = new SimpleAdapter(
                    MainActivity2.this,hashMaps,
                    R.layout.list_item,new String[]{"id","datedebut","datefin","etat"},
                    new int[]{R.id.id,R.id.datedebut,R.id.datefin,R.id.etat}
            );
            lv.setAdapter(adapter);
        }
    }
}
