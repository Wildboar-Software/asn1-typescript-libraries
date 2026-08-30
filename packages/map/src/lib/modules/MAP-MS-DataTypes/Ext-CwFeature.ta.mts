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
import { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
import { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";


/**
 * @summary Ext_CwFeature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ext-CwFeature ::= SEQUENCE {
 *     basicService    [1] Ext-BasicServiceCode, 
 *     ss-Status    [2] Ext-SS-Status,
 *     ... }
 * ```
 * 
 * @class
 */
export
class Ext_CwFeature {
    constructor (
        /**
         * @summary `basicService`.
         * @public
         * @readonly
         */
        readonly basicService: Ext_BasicServiceCode,
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: Ext_SS_Status,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Ext_CwFeature
     * @description
     * 
     * This takes an `object` and converts it to a `Ext_CwFeature`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Ext_CwFeature`.
     * @returns {Ext_CwFeature}
     */
    public static _from_object (_o: { [_K in keyof (Ext_CwFeature)]: (Ext_CwFeature)[_K] }): Ext_CwFeature {
        return new Ext_CwFeature(_o.basicService, _o.ss_Status, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Ext_CwFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Ext_CwFeature: $.ComponentSpec[] = [
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ss-Status", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Ext_CwFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Ext_CwFeature: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Ext_CwFeature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Ext_CwFeature: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Ext_CwFeature: $.ASN1Decoder<Ext_CwFeature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ext_CwFeature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ext_CwFeature (el: _Element): Ext_CwFeature {
    if (!_cached_decoder_for_Ext_CwFeature) { _cached_decoder_for_Ext_CwFeature = function (el: _Element): Ext_CwFeature {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Ext-CwFeature contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "basicService";
    sequence[1].name = "ss-Status";
    let basicService!: Ext_BasicServiceCode;
    let ss_Status!: Ext_SS_Status;
    basicService = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(sequence[0]);
    ss_Status = $._decode_implicit<Ext_SS_Status>(() => _decode_Ext_SS_Status)(sequence[1]);
    return new Ext_CwFeature(
        basicService,
        ss_Status,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_Ext_CwFeature(el);
}

let _cached_encoder_for_Ext_CwFeature: $.ASN1Encoder<Ext_CwFeature> | null = null;

/**
 * @summary Encodes a(n) Ext_CwFeature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ext_CwFeature, encoded as an ASN.1 Element.
 */
export
function _encode_Ext_CwFeature (value: Ext_CwFeature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ext_CwFeature) { _cached_encoder_for_Ext_CwFeature = function (value: Ext_CwFeature, elGetter: $.ASN1Encoder<Ext_CwFeature>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Ext_BasicServiceCode, $.BER)(value.basicService, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Ext_SS_Status, $.BER)(value.ss_Status, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Ext_CwFeature(value, elGetter);
}


/* eslint-enable */
