# Uso de pichincha-input en Angular

### Implementar en .html
```html
  <pichincha-input id-element="idInput" label="This is an input" placeholder="Type something" />
```

### Manejo de eventos en el .ts
```typescript
  onchangeinput(event) {
    console.log(event);
  }
```

Pasar el evento dentro del web component.

```html
  <pichincha-input (change)="onchangeinput($event)" label="This is an input" placeholder="Type something" /> 
```