package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

import android.view.View;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    hideSystemUI();

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
    }});
  }

  /**
   * Hide android navbar and toolbar for full screen experience
   */
  private void hideSystemUI() {
    final int flags = View.SYSTEM_UI_FLAG_LAYOUT_STABLE
            | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
            | View.SYSTEM_UI_FLAG_FULLSCREEN
            | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
    View decorView = getWindow().getDecorView();

    decorView.setSystemUiVisibility(flags);
    decorView.setOnSystemUiVisibilityChangeListener((int visibility) ->  {
      if((visibility & View.SYSTEM_UI_FLAG_FULLSCREEN) == 0) {
        decorView.setSystemUiVisibility(flags);
      }
    });
  }
}
