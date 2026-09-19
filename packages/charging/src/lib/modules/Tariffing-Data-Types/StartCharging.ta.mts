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
import { NetworkIdentification, _decode_NetworkIdentification, _encode_NetworkIdentification } from "../Tariffing-Data-Types/NetworkIdentification.ta.mjs";
// export { NetworkIdentification, _decode_NetworkIdentification, _encode_NetworkIdentification } from "../Tariffing-Data-Types/NetworkIdentification.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Tariffing-Data-Types/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Tariffing-Data-Types/ExtensionField.ta.mjs";
import { ChargingReferenceIdentification, _decode_ChargingReferenceIdentification, _encode_ChargingReferenceIdentification } from "../Tariffing-Data-Types/ChargingReferenceIdentification.ta.mjs";
// export { ChargingReferenceIdentification, _decode_ChargingReferenceIdentification, _encode_ChargingReferenceIdentification } from "../Tariffing-Data-Types/ChargingReferenceIdentification.ta.mjs";


/**
 * @summary StartCharging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartCharging ::= SEQUENCE {
 *     networkOperators            [0] SEQUENCE SIZE (1..maxNetworkOperators) OF NetworkIdentification OPTIONAL,
 *     extensions                    [1] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField OPTIONAL,
 *     originationIdentification    [2] ChargingReferenceIdentification
 * }
 * ```
 * 
 * @class
 */
export
class StartCharging {
    constructor (
        /**
         * @summary `networkOperators`.
         * @public
         * @readonly
         */
        readonly networkOperators: OPTIONAL<NetworkIdentification[]>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>,
        /**
         * @summary `originationIdentification`.
         * @public
         * @readonly
         */
        readonly originationIdentification: ChargingReferenceIdentification
    ) {}

    /**
     * @summary Restructures an object into a StartCharging
     * @description
     * 
     * This takes an `object` and converts it to a `StartCharging`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartCharging`.
     * @returns {StartCharging}
     */
    public static _from_object (_o: { [_K in keyof (StartCharging)]: (StartCharging)[_K] }): StartCharging {
        return new StartCharging(_o.networkOperators, _o.extensions, _o.originationIdentification);
    }


}

/**
 * @summary The Leading Root Component Types of StartCharging
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartCharging: $.ComponentSpec[] = [
    new $.ComponentSpec("networkOperators", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originationIdentification", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of StartCharging
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartCharging: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartCharging
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartCharging: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartCharging: $.ASN1Decoder<StartCharging> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartCharging
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartCharging (el: _Element): StartCharging {
    if (!_cached_decoder_for_StartCharging) { _cached_decoder_for_StartCharging = function (el: _Element): StartCharging {
    let networkOperators: OPTIONAL<NetworkIdentification[]>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let originationIdentification!: ChargingReferenceIdentification;
    const callbacks: $.DecodingMap = {
        "networkOperators": (_el: _Element): void => { networkOperators = $._decode_implicit<NetworkIdentification[]>(() => $._decodeSequenceOf<NetworkIdentification>(() => _decode_NetworkIdentification))(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "originationIdentification": (_el: _Element): void => { originationIdentification = $._decode_implicit<ChargingReferenceIdentification>(() => _decode_ChargingReferenceIdentification)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartCharging,
        _extension_additions_list_spec_for_StartCharging,
        _root_component_type_list_2_spec_for_StartCharging,
        undefined,
    );
    return new StartCharging(
        networkOperators,
        extensions,
        originationIdentification
    );
}; }
    return _cached_decoder_for_StartCharging(el);
}

let _cached_encoder_for_StartCharging: $.ASN1Encoder<StartCharging> | null = null;

/**
 * @summary Encodes a(n) StartCharging into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartCharging, encoded as an ASN.1 Element.
 */
export
function _encode_StartCharging (value: StartCharging, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartCharging) { _cached_encoder_for_StartCharging = function (value: StartCharging, elGetter: $.ASN1Encoder<StartCharging>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.networkOperators === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<NetworkIdentification>(() => _encode_NetworkIdentification, $.BER), $.BER)(value.networkOperators, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ChargingReferenceIdentification, $.BER)(value.originationIdentification, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartCharging(value, elGetter);
}


/* eslint-enable */
