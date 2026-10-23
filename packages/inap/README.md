# Intelligent Network Application Protocol (INAP) in TypeScript

ASN.1 data structures, operations, and errors for the ITU-T Q.1200-series
Intelligent Network Application Protocol (INAP), the telephony protocol used
between intelligent network entities such as the service switching function,
service control function, specialized resource function, service data function,
and call unrelated service function. This module is ESM-only.

The modules follow ITU-T Recommendations
[Q.1218](https://www.itu.int/rec/T-REC-Q.1218) (CS-1),
[Q.1228](https://www.itu.int/rec/T-REC-Q.1228) (CS-2),
[Q.1238](https://www.itu.int/rec/T-REC-Q.1238) (CS-3), and
[Q.1248](https://www.itu.int/rec/T-REC-Q.1248) (CS-4).

Import a module subpath, for example `@wildboar/inap/IN-SSF-SCF-ops-args`.
The package root does not re-export every module.

See the
[documentation](https://github.com/Wildboar-Software/asn1-typescript-libraries/blob/master/docs/all.md)
that applies to this library and others to learn how to use this module.

These libraries were generated entirely or in part by the
[ASN.1 Compilation Service](https://wildboarsoftware.com/asn1-compilation)
offered by [Wildboar Software](https://wildboarsoftware.com). The ASN.1
compiler itself is closed-source and proprietary, but some of the libraries
produced with it are released publicly under the
[MIT license](https://mit-license.org/).

If you would like to see additional ASN.1 libraries in TypeScript or other
programming languages, or if you have any other questions, please contact us at
[contact@wildboarsoftware.com](mailto:contact@wildboarsoftware.com).

## Example Usage

```typescript
const methodId = _OID.fromParts([1, 2, 3]);
const name: Name = {
    rdnSequence: [[
        new AttributeTypeAndValue(
            _OID.fromParts([2, 5, 4, 3]),
            $._encodeUTF8String("scf", $.BER),
        ),
    ]],
};
const withContext = new ExecuteArgument_Type_input_assertions_Item_valuesWithContext_Item(
    $._encodeInteger(7, $.BER),
    [],
);
const assertion = new ExecuteArgument_Type_input_assertions_Item(
    $._encodeObjectIdentifier(methodId, $.BER),
    [$._encodeInteger(1, $.BER)],
    [withContext],
);
const original = new ExecuteArgument_Type(
    name,
    methodId,
    [assertion],
    $._encodeNull(null, $.BER),
    ExecuteArgument_Type._default_value_for_serviceControls,
    undefined,
    undefined,
    ExecuteArgument_Type._default_value_for_operationProgress,
    undefined,
    undefined,
    undefined,
    ExecuteArgument_Type._default_value_for_entryOnly,
    ExecuteArgument_Type._default_value_for_nameResolveOnMaste,
    undefined,
    ExecuteArgument_Type._default_value_for_familyGrouping,
);
const encoded = _encode_ExecuteArgument_Type(original, $.BER).toBytes();
```

## AI Usage Statement

This package was onboarded from the raw compiler outputs using AI (Grok 4.7)
on 20 October 2026.
