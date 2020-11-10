package com.example.abhoer_stage;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.NotificationCompat;

import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
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
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;

public class Home extends AppCompatActivity {


    private static String url;

    private static String lg,pass;

    public ArrayList<HashMap<String ,String>> contactList;
    private static final String TAG = "HttpHandler";
    private ProgressDialog pDialog;

    ImageView list1,list2,list3,list4;
    TextView t1,t2;
    Animation frombottom;
    String id;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        list1 = (ImageView) findViewById(R.id.imageView);
        list2 = (ImageView) findViewById(R.id.imageView2);
        list3 = (ImageView) findViewById(R.id.imageView3);
        list4 = (ImageView) findViewById(R.id.imageView4);
        t1 = (TextView) findViewById(R.id.textView);
        t2 = (TextView) findViewById(R.id.textView3);

        frombottom = AnimationUtils.loadAnimation(this, R.anim.frombottom);

        t1.startAnimation(frombottom);
        t2.startAnimation(frombottom);
        list1.startAnimation(frombottom);
        list2.startAnimation(frombottom);
        list3.startAnimation(frombottom);
        list4.startAnimation(frombottom);

        Bundle extras = getIntent().getExtras();
        id= extras.getString("id");
        adresseIp ad=new adresseIp();
        url=ad.getIp()+":8080/api/stages/get_stage_byStagiaire/"+id;
        new GetContacts().execute();
        list1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                passeposi(id);
            }
        });

        list2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                passeposi2(id);
            }
        });

        list3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                passeposi3(id);
            }
        });
        list4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                passeposi4(id);
            }
        });
    }
    public void passeposi(String p)
    {
        Intent intent= new Intent(this,MainActivity.class);
        intent.putExtra("id",p);
        startActivity(intent);
    }

    public void passeposi2(String p)
    {
        Intent intent= new Intent(this,MainActivity2.class);
        intent.putExtra("id",p);
        startActivity(intent);

    }
    public void passeposi3(String p)
    {
        Intent intent= new Intent(this,graph.class);
        intent.putExtra("id",p);
        startActivity(intent);

    }
    public void passeposi4(String p)
    {
        Intent intent= new Intent(this,mnCompte.class);
        intent.putExtra("id",p);
        startActivity(intent);

    }

    public void affiche(int v,int a)
    {
        t1.setText(a+" Demandes");
        t2.setText(v+" Stages");
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
            String jsonStr = ah.makeServiceCall(url);
            Log.e(TAG,"Response from url: "+jsonStr);
            if(jsonStr != null)
            {
                try {
                    JSONArray jsonObject= new JSONArray(jsonStr);
                    int v=0,a=0;

                    for(int i=0;i<jsonObject.length();i++)
                    {
                        JSONObject c=jsonObject.getJSONObject(i);

                        a++;
                        if(c.getString("etat").equals("valide") ) {
                            v++;
                        }
                        if(i==jsonObject.length()-1)
                        {
                            affiche(v,a);
                        }
                    }


                }catch(final JSONException e)
                {
                    Log.e(TAG,"JSON parsing error: "+e.getMessage());
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            Toast.makeText(Home.this,
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
                        Toast.makeText(Home.this,
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
