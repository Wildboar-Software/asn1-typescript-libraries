/* eslint-disable */
import {
    OPTIONAL,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FieldParamIdent
 * @description
 *
 * Invite flags for field-definition VTE-parameters. Requires Fields
 * FU. ISO/IEC 9040:1997 §10.8, §18.2.2; ISO/IEC 9041-1:1997
 * §12.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldParamIdent ::= SEQUENCE {
 *     capability       [0] IMPLICIT NULL OPTIONAL,
 *     maxFields        [1] IMPLICIT NULL OPTIONAL,
 *     maxFieldElements [2] IMPLICIT NULL OPTIONAL,
 *     accessOutside    [3] IMPLICIT NULL OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FieldParamIdent {
    constructor (
        /**
         * @summary `capability`.
         * @description
         * Invite `field-definition-capability` (default `"no"`).
         * ISO/IEC 9040:1997 §18.1, §18.2.2.
         * @public
         * @readonly
         */
        readonly capability: OPTIONAL<NULL>,
        /**
         * @summary `maxFields`.
         * @description
         * Invite `max-fields` (F-dimension bound; default 1).
         * ISO/IEC 9040:1997 §18.2.2.
         * @public
         * @readonly
         */
        readonly maxFields: OPTIONAL<NULL>,
        /**
         * @summary `maxFieldElements`.
         * @description
         * Invite `max-field-elements` (S-dimension bound; default 1).
         * ISO/IEC 9040:1997 §18.2.2.
         * @public
         * @readonly
         */
        readonly maxFieldElements: OPTIONAL<NULL>,
        /**
         * @summary `accessOutside`.
         * @description
         * Invite `access-outside-fields` (default `"allowed"`).
         * ISO/IEC 9040:1997 §18.2.2, §19.5.
         * @public
         * @readonly
         */
        readonly accessOutside: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a FieldParamIdent
     * @description
     * 
     * This takes an `object` and converts it to a `FieldParamIdent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FieldParamIdent`.
     * @returns {FieldParamIdent}
     */
    public static _from_object (_o: { [_K in keyof (FieldParamIdent)]: (FieldParamIdent)[_K] }): FieldParamIdent {
        return new FieldParamIdent(_o.capability, _o.maxFields, _o.maxFieldElements, _o.accessOutside);
    }


}

/**
 * @summary The Leading Root Component Types of FieldParamIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FieldParamIdent: $.ComponentSpec[] = [
    new $.ComponentSpec("capability", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("maxFields", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("maxFieldElements", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accessOutside", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FieldParamIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FieldParamIdent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FieldParamIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FieldParamIdent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FieldParamIdent: $.ASN1Decoder<FieldParamIdent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FieldParamIdent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FieldParamIdent (el: _Element): FieldParamIdent {
    if (!_cached_decoder_for_FieldParamIdent) { _cached_decoder_for_FieldParamIdent = function (el: _Element): FieldParamIdent {
    let capability: OPTIONAL<NULL>;
    let maxFields: OPTIONAL<NULL>;
    let maxFieldElements: OPTIONAL<NULL>;
    let accessOutside: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "capability": (_el: _Element): void => { capability = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "maxFields": (_el: _Element): void => { maxFields = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "maxFieldElements": (_el: _Element): void => { maxFieldElements = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "accessOutside": (_el: _Element): void => { accessOutside = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FieldParamIdent,
        _extension_additions_list_spec_for_FieldParamIdent,
        _root_component_type_list_2_spec_for_FieldParamIdent,
        undefined,
    );
    return new FieldParamIdent(
        capability,
        maxFields,
        maxFieldElements,
        accessOutside
    );
}; }
    return _cached_decoder_for_FieldParamIdent(el);
}

let _cached_encoder_for_FieldParamIdent: $.ASN1Encoder<FieldParamIdent> | null = null;

/**
 * @summary Encodes a(n) FieldParamIdent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FieldParamIdent, encoded as an ASN.1 Element.
 */
export
function _encode_FieldParamIdent (value: FieldParamIdent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FieldParamIdent) { _cached_encoder_for_FieldParamIdent = function (value: FieldParamIdent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.capability, $.BER)),
            /* IF_ABSENT  */ ((value.maxFields === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.maxFields, $.BER)),
            /* IF_ABSENT  */ ((value.maxFieldElements === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.maxFieldElements, $.BER)),
            /* IF_ABSENT  */ ((value.accessOutside === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.accessOutside, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FieldParamIdent(value, elGetter);
}


/* eslint-enable */
