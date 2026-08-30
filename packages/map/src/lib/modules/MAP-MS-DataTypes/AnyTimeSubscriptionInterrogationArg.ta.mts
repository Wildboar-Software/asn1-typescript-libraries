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
import { SubscriberIdentity, _decode_SubscriberIdentity, _encode_SubscriberIdentity } from "../MAP-CommonDataTypes/SubscriberIdentity.ta.mjs";
// export { SubscriberIdentity, _decode_SubscriberIdentity, _encode_SubscriberIdentity } from "../MAP-CommonDataTypes/SubscriberIdentity.ta.mjs";
import { RequestedSubscriptionInfo, _decode_RequestedSubscriptionInfo, _encode_RequestedSubscriptionInfo } from "../MAP-MS-DataTypes/RequestedSubscriptionInfo.ta.mjs";
// export { RequestedSubscriptionInfo, _decode_RequestedSubscriptionInfo, _encode_RequestedSubscriptionInfo } from "../MAP-MS-DataTypes/RequestedSubscriptionInfo.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary AnyTimeSubscriptionInterrogationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyTimeSubscriptionInterrogationArg ::= SEQUENCE {
 *     subscriberIdentity    [0] SubscriberIdentity,
 *     requestedSubscriptionInfo    [1] RequestedSubscriptionInfo,
 *     gsmSCF-Address    [2] ISDN-AddressString,
 *     extensionContainer    [3] ExtensionContainer    OPTIONAL,
 *     longFTN-Supported    [4]    NULL    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class AnyTimeSubscriptionInterrogationArg {
    constructor (
        /**
         * @summary `subscriberIdentity`.
         * @public
         * @readonly
         */
        readonly subscriberIdentity: SubscriberIdentity,
        /**
         * @summary `requestedSubscriptionInfo`.
         * @public
         * @readonly
         */
        readonly requestedSubscriptionInfo: RequestedSubscriptionInfo,
        /**
         * @summary `gsmSCF_Address`.
         * @public
         * @readonly
         */
        readonly gsmSCF_Address: ISDN_AddressString,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `longFTN_Supported`.
         * @public
         * @readonly
         */
        readonly longFTN_Supported: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AnyTimeSubscriptionInterrogationArg
     * @description
     * 
     * This takes an `object` and converts it to a `AnyTimeSubscriptionInterrogationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AnyTimeSubscriptionInterrogationArg`.
     * @returns {AnyTimeSubscriptionInterrogationArg}
     */
    public static _from_object (_o: { [_K in keyof (AnyTimeSubscriptionInterrogationArg)]: (AnyTimeSubscriptionInterrogationArg)[_K] }): AnyTimeSubscriptionInterrogationArg {
        return new AnyTimeSubscriptionInterrogationArg(_o.subscriberIdentity, _o.requestedSubscriptionInfo, _o.gsmSCF_Address, _o.extensionContainer, _o.longFTN_Supported, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AnyTimeSubscriptionInterrogationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AnyTimeSubscriptionInterrogationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("subscriberIdentity", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("requestedSubscriptionInfo", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("gsmSCF-Address", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("longFTN-Supported", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AnyTimeSubscriptionInterrogationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AnyTimeSubscriptionInterrogationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AnyTimeSubscriptionInterrogationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AnyTimeSubscriptionInterrogationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AnyTimeSubscriptionInterrogationArg: $.ASN1Decoder<AnyTimeSubscriptionInterrogationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnyTimeSubscriptionInterrogationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnyTimeSubscriptionInterrogationArg (el: _Element): AnyTimeSubscriptionInterrogationArg {
    if (!_cached_decoder_for_AnyTimeSubscriptionInterrogationArg) { _cached_decoder_for_AnyTimeSubscriptionInterrogationArg = function (el: _Element): AnyTimeSubscriptionInterrogationArg {
    let subscriberIdentity!: SubscriberIdentity;
    let requestedSubscriptionInfo!: RequestedSubscriptionInfo;
    let gsmSCF_Address!: ISDN_AddressString;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let longFTN_Supported: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "subscriberIdentity": (_el: _Element): void => { subscriberIdentity = $._decode_explicit<SubscriberIdentity>(() => _decode_SubscriberIdentity)(_el); },
        "requestedSubscriptionInfo": (_el: _Element): void => { requestedSubscriptionInfo = $._decode_implicit<RequestedSubscriptionInfo>(() => _decode_RequestedSubscriptionInfo)(_el); },
        "gsmSCF-Address": (_el: _Element): void => { gsmSCF_Address = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "longFTN-Supported": (_el: _Element): void => { longFTN_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AnyTimeSubscriptionInterrogationArg,
        _extension_additions_list_spec_for_AnyTimeSubscriptionInterrogationArg,
        _root_component_type_list_2_spec_for_AnyTimeSubscriptionInterrogationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AnyTimeSubscriptionInterrogationArg(
        subscriberIdentity,
        requestedSubscriptionInfo,
        gsmSCF_Address,
        extensionContainer,
        longFTN_Supported,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AnyTimeSubscriptionInterrogationArg(el);
}

let _cached_encoder_for_AnyTimeSubscriptionInterrogationArg: $.ASN1Encoder<AnyTimeSubscriptionInterrogationArg> | null = null;

/**
 * @summary Encodes a(n) AnyTimeSubscriptionInterrogationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyTimeSubscriptionInterrogationArg, encoded as an ASN.1 Element.
 */
export
function _encode_AnyTimeSubscriptionInterrogationArg (value: AnyTimeSubscriptionInterrogationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnyTimeSubscriptionInterrogationArg) { _cached_encoder_for_AnyTimeSubscriptionInterrogationArg = function (value: AnyTimeSubscriptionInterrogationArg, elGetter: $.ASN1Encoder<AnyTimeSubscriptionInterrogationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_SubscriberIdentity, $.BER)(value.subscriberIdentity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RequestedSubscriptionInfo, $.BER)(value.requestedSubscriptionInfo, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER)(value.gsmSCF_Address, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER)),
            /* IF_ABSENT  */ ((value.longFTN_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.longFTN_Supported, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AnyTimeSubscriptionInterrogationArg(value, elGetter);
}


/* eslint-enable */
