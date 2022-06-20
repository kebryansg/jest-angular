# Uso de pichincha-button en Angular

### Implementar en .html
```html
<pichincha-button size="large" id="idButton" color="primary">
    Texto Boton
</pichincha-button>
```

### Manejo de eventos en el .ts
```typescript
 onclickbutton(event) {
    console.log(event);
  }
```


Pasar el evento dentro del web component.

```html
<pichincha-button  (clickbutton)="onclickbutton($event)" size="large"  id="button"  color="primary">
    Texto Boton
</pichincha-button>
```

