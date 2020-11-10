package com.example.abhoer_stage;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListAdapter;
import android.widget.SimpleAdapter;
import android.widget.TextView;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;

public class login extends AppCompatActivity {
     Button btn;
    private static EditText login,passe;
     ImageView img;
    Animation frombottom;
    private static String url;

    private static String lg,pass;
    LinearLayout textsplash;
    public ArrayList<HashMap<String,String>> contactList;
    private static final String TAG = "HttpHandler";
    private ProgressDialog pDialog;
    @RequiresApi(api = Build.VERSION_CODES.M)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        textsplash = (LinearLayout) findViewById(R.id.textsplash);
        login = (EditText) findViewById(R.id.login);
        passe = (EditText) findViewById(R.id.passe);
        passe = (EditText) findViewById(R.id.passe);
        img = (ImageView) findViewById(R.id.img);
        btn = (Button) findViewById(R.id.button1);

        frombottom = AnimationUtils.loadAnimation(this, R.anim.frombottom);

        login.startAnimation(frombottom);
        passe.startAnimation(frombottom);
        passe.startAnimation(frombottom);
        img.startAnimation(frombottom);
        btn.startAnimation(frombottom);

        adresseIp ad=new adresseIp();
        url=ad.getIp()+":8080/api/stagiaires/All";

        textsplash.animate().translationY(140).alpha(0).setDuration(800).setStartDelay(300);

            btn.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if(login.getText().toString().isEmpty() ||passe.getText().toString().isEmpty()  )
                    {
                        login.setError("Empty");
                        passe.setError("Empty");
                    }else
                    {
                        lg=login.getText().toString();
                        pass=passe.getText().toString();
                        new GetContacts().execute();
                    }
                }
            });
    }

    public void passeposi(String p)
    {
        Intent intent= new Intent(this,Home.class);
        intent.putExtra("id",p);
        startActivity(intent);
    }
    public void errormsg()
    {
        Toast.makeText(login.this,
                "nooo",
                Toast.LENGTH_SHORT).show();
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

            boolean test=false;
            if(jsonStr != null)
            {
                try {
                    JSONArray jsonObject= new JSONArray(jsonStr);
                    for(int i=0;i<jsonObject.length();i++)
                    {
                        JSONObject c=jsonObject.getJSONObject(i);
                         if(c.getString("login").equals(lg) && c.getString("motpasse").equals(pass)) {
                            passeposi(c.getString("id"));
                            test=true;
                         }
                    }

                }catch(final JSONException e)
                {
                    Log.e(TAG,"JSON parsing error: "+e.getMessage());
                    runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            Toast.makeText(login.this,
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
                        Toast.makeText(login.this,
                                "Couldn't get json from server.",
                                Toast.LENGTH_SHORT).show();
                    }
                });
            }
            if(test==false)
            {
                errormsg();
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
