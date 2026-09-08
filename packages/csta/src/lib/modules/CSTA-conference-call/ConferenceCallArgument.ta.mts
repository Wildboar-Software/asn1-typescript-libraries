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
import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";
// export { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";


/**
 * @summary ConferenceCallArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConferenceCallArgument ::= SEQUENCE
 * {     heldCall             ConnectionID,
 *     activeCall             ConnectionID,
 *     extensions             CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ConferenceCallArgument {
    constructor (
        /**
         * @summary `heldCall`.
         * @public
         * @readonly
         */
        readonly heldCall: ConnectionID,
        /**
         * @summary `activeCall`.
         * @public
         * @readonly
         */
        readonly activeCall: ConnectionID,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a ConferenceCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `ConferenceCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConferenceCallArgument`.
     * @returns {ConferenceCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (ConferenceCallArgument)]: (ConferenceCallArgument)[_K] }): ConferenceCallArgument {
        return new ConferenceCallArgument(_o.heldCall, _o.activeCall, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of ConferenceCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConferenceCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("heldCall", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("activeCall", false, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ConferenceCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConferenceCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConferenceCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConferenceCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConferenceCallArgument: $.ASN1Decoder<ConferenceCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConferenceCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConferenceCallArgument (el: _Element): ConferenceCallArgument {
    if (!_cached_decoder_for_ConferenceCallArgument) { _cached_decoder_for_ConferenceCallArgument = function (el: _Element): ConferenceCallArgument {
    let heldCall!: ConnectionID;
    let activeCall!: ConnectionID;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "heldCall": (_el: _Element): void => { heldCall = _decode_ConnectionID(_el); },
        "activeCall": (_el: _Element): void => { activeCall = _decode_ConnectionID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConferenceCallArgument,
        _extension_additions_list_spec_for_ConferenceCallArgument,
        _root_component_type_list_2_spec_for_ConferenceCallArgument,
        undefined,
    );
    return new ConferenceCallArgument(
        heldCall,
        activeCall,
        extensions
    );
}; }
    return _cached_decoder_for_ConferenceCallArgument(el);
}

let _cached_encoder_for_ConferenceCallArgument: $.ASN1Encoder<ConferenceCallArgument> | null = null;

/**
 * @summary Encodes a(n) ConferenceCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConferenceCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ConferenceCallArgument (value: ConferenceCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConferenceCallArgument) { _cached_encoder_for_ConferenceCallArgument = function (value: ConferenceCallArgument, elGetter: $.ASN1Encoder<ConferenceCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.heldCall, $.BER),
            /* REQUIRED   */ _encode_ConnectionID(value.activeCall, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConferenceCallArgument(value, elGetter);
}


/* eslint-enable */
