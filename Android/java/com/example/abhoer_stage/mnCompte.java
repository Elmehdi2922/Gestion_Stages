package com.example.abhoer_stage;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;

public class mnCompte extends AppCompatActivity {
    Button btn;
    private static TextView login,nom,cin,prenom,adresse,email,tele,niv;

    Animation frombottom;
    private static String url;
    public String id;

    LinearLayout textsplash;
    public ArrayList<HashMap<String ,String>> contactList;
    private static final String TAG = "HttpHandler";
    private ProgressDialog pDialog;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_mn_compte);

        Bundle extras = getIntent().getExtras();
        id= extras.getString("id");

        login = (TextView) findViewById(R.id.login2);
        nom = (TextView) findViewById(R.id.nom);
        cin = (TextView) findViewById(R.id.cin);
        prenom = (TextView) findViewById(R.id.prenom);
        adresse = (TextView) findViewById(R.id.adresse);
        email = (TextView) findViewById(R.id.email);
        tele = (TextView) findViewById(R.id.Tele);
        niv = (TextView) findViewById(R.id.niveau);

        frombottom = AnimationUtils.loadAnimation(this, R.anim.frombottom);

        login.startAnimation(frombottom);
        nom.startAnimation(frombottom);
        cin.startAnimation(frombottom);
        prenom.startAnimation(frombottom);
        adresse.startAnimation(frombottom);
        email.startAnimation(frombottom);
        tele.startAnimation(frombottom);
        niv.startAnimation(frombottom);

        adresseIp ad=new adresseIp();
        url=ad.getIp()+":8080/api/stages/get_stage_byStagiaire/"+id;
        new GetContacts().execute();
    }
    public void passeposi(String n,String p,String c,String l,String a,String nn,String e,String t)
    {
        login.setText(l);
        nom.setText(n);
        cin.setText(c);
        prenom.setText(p);
        adresse.setText(a);
        email.setText(e);
        tele.setText(t);
        niv.setText(nn);
    }
    private class GetContacts extends AsyncTask<Void,Void,Void>
    {
        @Override
        protected void onPreExecute() {
            super.onPreExecute();
        }
        @Override
        protected Void doInBackground(Void... voids)
        {
            HttpHandler ah = new HttpHandler();
            Log.d("mehdi",url+" url");
            String jsonStr = ah.makeServiceCall(url);
            Log.e(TAG,"Response from url: "+jsonStr);
            if(jsonStr != null)
            {
                try {
                    JSONArray jsonObject= new JSONArray(jsonStr);

                    boolean test=false;
                    for(int i=0;i<jsonObject.length();i++)
                    {
                        JSONObject stages=jsonObject.getJSONObject(i);
                        JSONObject c=stages.getJSONObject("idstagiaire");
                        if(c.getString("id").equals(id)) {
                            passeposi(c.getString("nom"),c.getString("prenom"),c.getString("cin"),c.getString("login"),c.getString("adresse"),c.getString("ecole"),c.getString("email"),c.getString("tele"));
                        }
                    }
                }catch(final JSONException e)
                {
                    Log.e(TAG,"JSON parsing error: "+e.getMessage());
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            Toast.makeText(mnCompte.this,
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
                        Toast.makeText(mnCompte.this,
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
        }
    }
}
