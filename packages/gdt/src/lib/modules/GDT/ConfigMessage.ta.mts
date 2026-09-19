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
import { ConfigAction, ConfigAction_ca_cfg_get /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_get /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigAction_ca_cfg_set /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_set /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigAction_ca_cfg_replicate /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_replicate /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigAction_ca_cfg_ac /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_ac /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigAction_ca_cfg_result /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_result /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigAction_ca_cfg_user_login /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_user_login /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigAction_ca_cfg_user_logout /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_user_logout /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ConfigAction, _encode_ConfigAction } from "../GDT/ConfigAction.ta.mjs";
// export { ConfigAction, ConfigAction_ca_cfg_get /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_get /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigAction_ca_cfg_set /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_set /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigAction_ca_cfg_replicate /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_replicate /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigAction_ca_cfg_ac /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_ac /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigAction_ca_cfg_result /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_result /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigAction_ca_cfg_user_login /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_user_login /* IMPORTED_SHORT_NAMED_INTEGER */, ConfigAction_ca_cfg_user_logout /* IMPORTED_LONG_NAMED_INTEGER */, ca_cfg_user_logout /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ConfigAction, _encode_ConfigAction } from "../GDT/ConfigAction.ta.mjs";
import { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";
// export { Parameters, _decode_Parameters, _encode_Parameters } from "../GDT/Parameters.ta.mjs";


/**
 * @summary ConfigMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfigMessage ::= SEQUENCE {
 *     action      ConfigAction,
 *     payload     OCTET STRING OPTIONAL,
 *     params      Parameters OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ConfigMessage {
    constructor (
        /**
         * @summary `action`.
         * @public
         * @readonly
         */
        readonly action: ConfigAction,
        /**
         * @summary `payload`.
         * @public
         * @readonly
         */
        readonly payload: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `params`.
         * @public
         * @readonly
         */
        readonly params: OPTIONAL<Parameters>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ConfigMessage
     * @description
     * 
     * This takes an `object` and converts it to a `ConfigMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConfigMessage`.
     * @returns {ConfigMessage}
     */
    public static _from_object (_o: { [_K in keyof (ConfigMessage)]: (ConfigMessage)[_K] }): ConfigMessage {
        return new ConfigMessage(_o.action, _o.payload, _o.params, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ConfigMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConfigMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("action", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("payload", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("params", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ConfigMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConfigMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConfigMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConfigMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConfigMessage: $.ASN1Decoder<ConfigMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfigMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfigMessage (el: _Element): ConfigMessage {
    if (!_cached_decoder_for_ConfigMessage) { _cached_decoder_for_ConfigMessage = function (el: _Element): ConfigMessage {
    let action!: ConfigAction;
    let payload: OPTIONAL<OCTET_STRING>;
    let params: OPTIONAL<Parameters>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "action": (_el: _Element): void => { action = _decode_ConfigAction(_el); },
        "payload": (_el: _Element): void => { payload = $._decodeOctetString(_el); },
        "params": (_el: _Element): void => { params = _decode_Parameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConfigMessage,
        _extension_additions_list_spec_for_ConfigMessage,
        _root_component_type_list_2_spec_for_ConfigMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ConfigMessage(
        action,
        payload,
        params,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ConfigMessage(el);
}

let _cached_encoder_for_ConfigMessage: $.ASN1Encoder<ConfigMessage> | null = null;

/**
 * @summary Encodes a(n) ConfigMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfigMessage, encoded as an ASN.1 Element.
 */
export
function _encode_ConfigMessage (value: ConfigMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfigMessage) { _cached_encoder_for_ConfigMessage = function (value: ConfigMessage, elGetter: $.ASN1Encoder<ConfigMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConfigAction(value.action, $.BER),
            /* IF_ABSENT  */ ((value.payload === undefined) ? undefined : $._encodeOctetString(value.payload, $.BER)),
            /* IF_ABSENT  */ ((value.params === undefined) ? undefined : _encode_Parameters(value.params, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConfigMessage(value, elGetter);
}


/* eslint-enable */
