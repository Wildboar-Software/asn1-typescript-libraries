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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { SubscriberIdentity, _decode_SubscriberIdentity, _encode_SubscriberIdentity } from "../MAP-CommonDataTypes/SubscriberIdentity.ta.mjs";
// export { SubscriberIdentity, _decode_SubscriberIdentity, _encode_SubscriberIdentity } from "../MAP-CommonDataTypes/SubscriberIdentity.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary RoutingInfoForLCS_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingInfoForLCS-Arg ::= SEQUENCE {
 *     mlcNumber    [0] ISDN-AddressString,
 *     targetMS    [1] SubscriberIdentity,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class RoutingInfoForLCS_Arg {
    constructor (
        /**
         * @summary `mlcNumber`.
         * @public
         * @readonly
         */
        readonly mlcNumber: ISDN_AddressString,
        /**
         * @summary `targetMS`.
         * @public
         * @readonly
         */
        readonly targetMS: SubscriberIdentity,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RoutingInfoForLCS_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `RoutingInfoForLCS_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoutingInfoForLCS_Arg`.
     * @returns {RoutingInfoForLCS_Arg}
     */
    public static _from_object (_o: { [_K in keyof (RoutingInfoForLCS_Arg)]: (RoutingInfoForLCS_Arg)[_K] }): RoutingInfoForLCS_Arg {
        return new RoutingInfoForLCS_Arg(_o.mlcNumber, _o.targetMS, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RoutingInfoForLCS_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RoutingInfoForLCS_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("mlcNumber", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("targetMS", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RoutingInfoForLCS_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RoutingInfoForLCS_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RoutingInfoForLCS_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RoutingInfoForLCS_Arg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RoutingInfoForLCS_Arg: $.ASN1Decoder<RoutingInfoForLCS_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingInfoForLCS_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoutingInfoForLCS_Arg (el: _Element): RoutingInfoForLCS_Arg {
    if (!_cached_decoder_for_RoutingInfoForLCS_Arg) { _cached_decoder_for_RoutingInfoForLCS_Arg = function (el: _Element): RoutingInfoForLCS_Arg {
    let mlcNumber!: ISDN_AddressString;
    let targetMS!: SubscriberIdentity;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mlcNumber": (_el: _Element): void => { mlcNumber = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "targetMS": (_el: _Element): void => { targetMS = $._decode_explicit<SubscriberIdentity>(() => _decode_SubscriberIdentity)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RoutingInfoForLCS_Arg,
        _extension_additions_list_spec_for_RoutingInfoForLCS_Arg,
        _root_component_type_list_2_spec_for_RoutingInfoForLCS_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RoutingInfoForLCS_Arg(
        mlcNumber,
        targetMS,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RoutingInfoForLCS_Arg(el);
}

let _cached_encoder_for_RoutingInfoForLCS_Arg: $.ASN1Encoder<RoutingInfoForLCS_Arg> | null = null;

/**
 * @summary Encodes a(n) RoutingInfoForLCS_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingInfoForLCS_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_RoutingInfoForLCS_Arg (value: RoutingInfoForLCS_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoutingInfoForLCS_Arg) { _cached_encoder_for_RoutingInfoForLCS_Arg = function (value: RoutingInfoForLCS_Arg, elGetter: $.ASN1Encoder<RoutingInfoForLCS_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.mlcNumber, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SubscriberIdentity, $.BER)(value.targetMS, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RoutingInfoForLCS_Arg(value, elGetter);
}


/* eslint-enable */
