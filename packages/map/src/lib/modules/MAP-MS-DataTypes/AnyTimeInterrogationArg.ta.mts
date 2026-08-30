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
import { RequestedInfo, _decode_RequestedInfo, _encode_RequestedInfo } from "../MAP-MS-DataTypes/RequestedInfo.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary AnyTimeInterrogationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnyTimeInterrogationArg ::= SEQUENCE {
 *     subscriberIdentity    [0] SubscriberIdentity,
 *     requestedInfo    [1] RequestedInfo,
 *     gsmSCF-Address    [3] ISDN-AddressString,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class AnyTimeInterrogationArg {
    constructor (
        /**
         * @summary `subscriberIdentity`.
         * @public
         * @readonly
         */
        readonly subscriberIdentity: SubscriberIdentity,
        /**
         * @summary `requestedInfo`.
         * @public
         * @readonly
         */
        readonly requestedInfo: RequestedInfo,
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
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AnyTimeInterrogationArg
     * @description
     * 
     * This takes an `object` and converts it to a `AnyTimeInterrogationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AnyTimeInterrogationArg`.
     * @returns {AnyTimeInterrogationArg}
     */
    public static _from_object (_o: { [_K in keyof (AnyTimeInterrogationArg)]: (AnyTimeInterrogationArg)[_K] }): AnyTimeInterrogationArg {
        return new AnyTimeInterrogationArg(_o.subscriberIdentity, _o.requestedInfo, _o.gsmSCF_Address, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AnyTimeInterrogationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AnyTimeInterrogationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("subscriberIdentity", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("requestedInfo", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gsmSCF-Address", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of AnyTimeInterrogationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AnyTimeInterrogationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AnyTimeInterrogationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AnyTimeInterrogationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AnyTimeInterrogationArg: $.ASN1Decoder<AnyTimeInterrogationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnyTimeInterrogationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnyTimeInterrogationArg (el: _Element): AnyTimeInterrogationArg {
    if (!_cached_decoder_for_AnyTimeInterrogationArg) { _cached_decoder_for_AnyTimeInterrogationArg = function (el: _Element): AnyTimeInterrogationArg {
    let subscriberIdentity!: SubscriberIdentity;
    let requestedInfo!: RequestedInfo;
    let gsmSCF_Address!: ISDN_AddressString;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "subscriberIdentity": (_el: _Element): void => { subscriberIdentity = $._decode_explicit<SubscriberIdentity>(() => _decode_SubscriberIdentity)(_el); },
        "requestedInfo": (_el: _Element): void => { requestedInfo = $._decode_implicit<RequestedInfo>(() => _decode_RequestedInfo)(_el); },
        "gsmSCF-Address": (_el: _Element): void => { gsmSCF_Address = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AnyTimeInterrogationArg,
        _extension_additions_list_spec_for_AnyTimeInterrogationArg,
        _root_component_type_list_2_spec_for_AnyTimeInterrogationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AnyTimeInterrogationArg(
        subscriberIdentity,
        requestedInfo,
        gsmSCF_Address,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AnyTimeInterrogationArg(el);
}

let _cached_encoder_for_AnyTimeInterrogationArg: $.ASN1Encoder<AnyTimeInterrogationArg> | null = null;

/**
 * @summary Encodes a(n) AnyTimeInterrogationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnyTimeInterrogationArg, encoded as an ASN.1 Element.
 */
export
function _encode_AnyTimeInterrogationArg (value: AnyTimeInterrogationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnyTimeInterrogationArg) { _cached_encoder_for_AnyTimeInterrogationArg = function (value: AnyTimeInterrogationArg, elGetter: $.ASN1Encoder<AnyTimeInterrogationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_SubscriberIdentity, $.BER)(value.subscriberIdentity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_RequestedInfo, $.BER)(value.requestedInfo, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ISDN_AddressString, $.BER)(value.gsmSCF_Address, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AnyTimeInterrogationArg(value, elGetter);
}


/* eslint-enable */
