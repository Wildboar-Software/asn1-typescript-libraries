/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { Service2, _enum_for_Service2, Service2_audioMessageWaitingIndicator /* IMPORTED_LONG_ENUMERATION_ITEM */, audioMessageWaitingIndicator /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service2, _encode_Service2 } from "../AIN-Parameters/Service2.ta.mjs";
// export { Service2, _enum_for_Service2, Service2_audioMessageWaitingIndicator /* IMPORTED_LONG_ENUMERATION_ITEM */, audioMessageWaitingIndicator /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service2, _encode_Service2 } from "../AIN-Parameters/Service2.ta.mjs";
import { Action2, _decode_Action2, _encode_Action2 } from "../AIN-Parameters/Action2.ta.mjs";
// export { Action2, _decode_Action2, _encode_Action2 } from "../AIN-Parameters/Action2.ta.mjs";


/**
 * @summary UpdateGroup2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateGroup2 ::= SEQUENCE{
 *         service2 [1] IMPLICIT Service2,
 *         action2 Action2
 *     }
 * ```
 * 
 * @class
 */
export
class UpdateGroup2 {
    constructor (
        /**
         * @summary `service2`.
         * @public
         * @readonly
         */
        readonly service2: Service2,
        /**
         * @summary `action2`.
         * @public
         * @readonly
         */
        readonly action2: Action2
    ) {}

    /**
     * @summary Restructures an object into a UpdateGroup2
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateGroup2`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateGroup2`.
     * @returns {UpdateGroup2}
     */
    public static _from_object (_o: { [_K in keyof (UpdateGroup2)]: (UpdateGroup2)[_K] }): UpdateGroup2 {
        return new UpdateGroup2(_o.service2, _o.action2);
    }

        /**
         * @summary The enum used as the type of the component `service2`
         * @public
         * @static
         */

    public static _enum_for_service2 = _enum_for_Service2;
}

/**
 * @summary The Leading Root Component Types of UpdateGroup2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateGroup2: $.ComponentSpec[] = [
    new $.ComponentSpec("service2", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("action2", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of UpdateGroup2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateGroup2: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateGroup2
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateGroup2: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UpdateGroup2: $.ASN1Decoder<UpdateGroup2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateGroup2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateGroup2 (el: _Element): UpdateGroup2 {
    if (!_cached_decoder_for_UpdateGroup2) { _cached_decoder_for_UpdateGroup2 = function (el: _Element): UpdateGroup2 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UpdateGroup2 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service2";
    sequence[1].name = "action2";
    let service2!: Service2;
    let action2!: Action2;
    service2 = $._decode_implicit<Service2>(() => _decode_Service2)(sequence[0]);
    action2 = _decode_Action2(sequence[1]);
    return new UpdateGroup2(
        service2,
        action2,

    );
}; }
    return _cached_decoder_for_UpdateGroup2(el);
}

let _cached_encoder_for_UpdateGroup2: $.ASN1Encoder<UpdateGroup2> | null = null;

/**
 * @summary Encodes a(n) UpdateGroup2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateGroup2, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateGroup2 (value: UpdateGroup2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateGroup2) { _cached_encoder_for_UpdateGroup2 = function (value: UpdateGroup2, elGetter: $.ASN1Encoder<UpdateGroup2>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service2, $.BER)(value.service2, $.BER),
            /* REQUIRED   */ _encode_Action2(value.action2, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateGroup2(value, elGetter);
}


/* eslint-enable */
