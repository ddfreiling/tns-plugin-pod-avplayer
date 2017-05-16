import {Observable} from 'data/observable';
import {TnsPluginPodAvplayer} from 'nativescript-tns-plugin-pod-avplayer';

export class HelloWorldModel extends Observable {
  public message: string;
  private tnsPluginPodAvplayer: TnsPluginPodAvplayer;

  constructor() {
    super();

    this.tnsPluginPodAvplayer = new TnsPluginPodAvplayer();
    this.message = this.tnsPluginPodAvplayer.message;
  }
}