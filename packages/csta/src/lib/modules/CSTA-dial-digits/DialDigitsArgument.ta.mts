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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
import { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";
// export { CorrelatorData, _decode_CorrelatorData, _encode_CorrelatorData } from "../CSTA-device-feature-types/CorrelatorData.ta.mjs";
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary DialDigitsArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DialDigitsArgument ::= SEQUENCE
 * {     diallingConnection         ConnectionID,
 *     diallingSequence         DeviceID,
 *     correlatorData             CorrelatorData             OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DialDigitsArgument {
    constructor (
        /**
         * @summary `diallingConnection`.
         * @public
         * @readonly
         */
        readonly diallingConnection: ConnectionID,
        /**
         * @summary `diallingSequence`.
         * @public
         * @readonly
         */
        readonly diallingSequence: DeviceID,
        /**
         * @summary `correlatorData`.
         * @public
         * @readonly
         */
        readonly correlatorData: OPTIONAL<CorrelatorData>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a DialDigitsArgument
     * @description
     * 
     * This takes an `object` and converts it to a `DialDigitsArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DialDigitsArgument`.
     * @returns {DialDigitsArgument}
     */
    public static _from_object (_o: { [_K in keyof (DialDigitsArgument)]: (DialDigitsArgument)[_K] }): DialDigitsArgument {
        return new DialDigitsArgument(_o.diallingConnection, _o.diallingSequence, _o.correlatorData, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of DialDigitsArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DialDigitsArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("diallingConnection", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("diallingSequence", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("correlatorData", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DialDigitsArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DialDigitsArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DialDigitsArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DialDigitsArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DialDigitsArgument: $.ASN1Decoder<DialDigitsArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DialDigitsArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DialDigitsArgument (el: _Element): DialDigitsArgument {
    if (!_cached_decoder_for_DialDigitsArgument) { _cached_decoder_for_DialDigitsArgument = function (el: _Element): DialDigitsArgument {
    let diallingConnection!: ConnectionID;
    let diallingSequence!: DeviceID;
    let correlatorData: OPTIONAL<CorrelatorData>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "diallingConnection": (_el: _Element): void => { diallingConnection = _decode_ConnectionID(_el); },
        "diallingSequence": (_el: _Element): void => { diallingSequence = _decode_DeviceID(_el); },
        "correlatorData": (_el: _Element): void => { correlatorData = _decode_CorrelatorData(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DialDigitsArgument,
        _extension_additions_list_spec_for_DialDigitsArgument,
        _root_component_type_list_2_spec_for_DialDigitsArgument,
        undefined,
    );
    return new DialDigitsArgument(
        diallingConnection,
        diallingSequence,
        correlatorData,
        extensions
    );
}; }
    return _cached_decoder_for_DialDigitsArgument(el);
}

let _cached_encoder_for_DialDigitsArgument: $.ASN1Encoder<DialDigitsArgument> | null = null;

/**
 * @summary Encodes a(n) DialDigitsArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DialDigitsArgument, encoded as an ASN.1 Element.
 */
export
function _encode_DialDigitsArgument (value: DialDigitsArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DialDigitsArgument) { _cached_encoder_for_DialDigitsArgument = function (value: DialDigitsArgument, elGetter: $.ASN1Encoder<DialDigitsArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.diallingConnection, $.BER),
            /* REQUIRED   */ _encode_DeviceID(value.diallingSequence, $.BER),
            /* IF_ABSENT  */ ((value.correlatorData === undefined) ? undefined : _encode_CorrelatorData(value.correlatorData, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DialDigitsArgument(value, elGetter);
}


/* eslint-enable */
