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
import { ASCI_CallReference, _decode_ASCI_CallReference, _encode_ASCI_CallReference } from "../MAP-CommonDataTypes/ASCI-CallReference.ta.mjs";
// export { ASCI_CallReference, _decode_ASCI_CallReference, _encode_ASCI_CallReference } from "../MAP-CommonDataTypes/ASCI-CallReference.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { AdditionalInfo, _decode_AdditionalInfo, _encode_AdditionalInfo } from "../MAP-MS-DataTypes/AdditionalInfo.ta.mjs";
// export { AdditionalInfo, _decode_AdditionalInfo, _encode_AdditionalInfo } from "../MAP-MS-DataTypes/AdditionalInfo.ta.mjs";
import { AdditionalSubscriptions, AdditionalSubscriptions_privilegedUplinkRequest /* IMPORTED_LONG_NAMED_BIT */, privilegedUplinkRequest /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSubscriptions_emergencyUplinkRequest /* IMPORTED_LONG_NAMED_BIT */, emergencyUplinkRequest /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSubscriptions_emergencyReset /* IMPORTED_LONG_NAMED_BIT */, emergencyReset /* IMPORTED_SHORT_NAMED_BIT */, _decode_AdditionalSubscriptions, _encode_AdditionalSubscriptions } from "../MAP-MS-DataTypes/AdditionalSubscriptions.ta.mjs";
// export { AdditionalSubscriptions, AdditionalSubscriptions_privilegedUplinkRequest /* IMPORTED_LONG_NAMED_BIT */, privilegedUplinkRequest /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSubscriptions_emergencyUplinkRequest /* IMPORTED_LONG_NAMED_BIT */, emergencyUplinkRequest /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSubscriptions_emergencyReset /* IMPORTED_LONG_NAMED_BIT */, emergencyReset /* IMPORTED_SHORT_NAMED_BIT */, _decode_AdditionalSubscriptions, _encode_AdditionalSubscriptions } from "../MAP-MS-DataTypes/AdditionalSubscriptions.ta.mjs";
import { Kc, _decode_Kc, _encode_Kc } from "../MAP-MS-DataTypes/Kc.ta.mjs";
// export { Kc, _decode_Kc, _encode_Kc } from "../MAP-MS-DataTypes/Kc.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SendGroupCallInfoRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendGroupCallInfoRes ::= SEQUENCE {
 *     anchorMSC-Address    [0] ISDN-AddressString    OPTIONAL,
 *     asciCallReference    [1] ASCI-CallReference    OPTIONAL,
 *     imsi    [2] IMSI    OPTIONAL,
 *     additionalInfo    [3] AdditionalInfo    OPTIONAL,
 *     additionalSubscriptions    [4] AdditionalSubscriptions    OPTIONAL,
 *     kc    [5] Kc    OPTIONAL,
 *     extensionContainer    [6] ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class SendGroupCallInfoRes {
    constructor (
        /**
         * @summary `anchorMSC_Address`.
         * @public
         * @readonly
         */
        readonly anchorMSC_Address: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `asciCallReference`.
         * @public
         * @readonly
         */
        readonly asciCallReference: OPTIONAL<ASCI_CallReference>,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<AdditionalInfo>,
        /**
         * @summary `additionalSubscriptions`.
         * @public
         * @readonly
         */
        readonly additionalSubscriptions: OPTIONAL<AdditionalSubscriptions>,
        /**
         * @summary `kc`.
         * @public
         * @readonly
         */
        readonly kc: OPTIONAL<Kc>,
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
     * @summary Restructures an object into a SendGroupCallInfoRes
     * @description
     * 
     * This takes an `object` and converts it to a `SendGroupCallInfoRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendGroupCallInfoRes`.
     * @returns {SendGroupCallInfoRes}
     */
    public static _from_object (_o: { [_K in keyof (SendGroupCallInfoRes)]: (SendGroupCallInfoRes)[_K] }): SendGroupCallInfoRes {
        return new SendGroupCallInfoRes(_o.anchorMSC_Address, _o.asciCallReference, _o.imsi, _o.additionalInfo, _o.additionalSubscriptions, _o.kc, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SendGroupCallInfoRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendGroupCallInfoRes: $.ComponentSpec[] = [
    new $.ComponentSpec("anchorMSC-Address", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("asciCallReference", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("additionalInfo", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("additionalSubscriptions", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("kc", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SendGroupCallInfoRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendGroupCallInfoRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendGroupCallInfoRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendGroupCallInfoRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendGroupCallInfoRes: $.ASN1Decoder<SendGroupCallInfoRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendGroupCallInfoRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendGroupCallInfoRes (el: _Element): SendGroupCallInfoRes {
    if (!_cached_decoder_for_SendGroupCallInfoRes) { _cached_decoder_for_SendGroupCallInfoRes = function (el: _Element): SendGroupCallInfoRes {
    let anchorMSC_Address: OPTIONAL<ISDN_AddressString>;
    let asciCallReference: OPTIONAL<ASCI_CallReference>;
    let imsi: OPTIONAL<IMSI>;
    let additionalInfo: OPTIONAL<AdditionalInfo>;
    let additionalSubscriptions: OPTIONAL<AdditionalSubscriptions>;
    let kc: OPTIONAL<Kc>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "anchorMSC-Address": (_el: _Element): void => { anchorMSC_Address = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "asciCallReference": (_el: _Element): void => { asciCallReference = $._decode_implicit<ASCI_CallReference>(() => _decode_ASCI_CallReference)(_el); },
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "additionalInfo": (_el: _Element): void => { additionalInfo = $._decode_implicit<AdditionalInfo>(() => _decode_AdditionalInfo)(_el); },
        "additionalSubscriptions": (_el: _Element): void => { additionalSubscriptions = $._decode_implicit<AdditionalSubscriptions>(() => _decode_AdditionalSubscriptions)(_el); },
        "kc": (_el: _Element): void => { kc = $._decode_implicit<Kc>(() => _decode_Kc)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendGroupCallInfoRes,
        _extension_additions_list_spec_for_SendGroupCallInfoRes,
        _root_component_type_list_2_spec_for_SendGroupCallInfoRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendGroupCallInfoRes(
        anchorMSC_Address,
        asciCallReference,
        imsi,
        additionalInfo,
        additionalSubscriptions,
        kc,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SendGroupCallInfoRes(el);
}

let _cached_encoder_for_SendGroupCallInfoRes: $.ASN1Encoder<SendGroupCallInfoRes> | null = null;

/**
 * @summary Encodes a(n) SendGroupCallInfoRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendGroupCallInfoRes, encoded as an ASN.1 Element.
 */
export
function _encode_SendGroupCallInfoRes (value: SendGroupCallInfoRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendGroupCallInfoRes) { _cached_encoder_for_SendGroupCallInfoRes = function (value: SendGroupCallInfoRes, elGetter: $.ASN1Encoder<SendGroupCallInfoRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.anchorMSC_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.anchorMSC_Address, $.BER)),
            /* IF_ABSENT  */ ((value.asciCallReference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ASCI_CallReference, $.BER)(value.asciCallReference, $.BER)),
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.additionalInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AdditionalInfo, $.BER)(value.additionalInfo, $.BER)),
            /* IF_ABSENT  */ ((value.additionalSubscriptions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AdditionalSubscriptions, $.BER)(value.additionalSubscriptions, $.BER)),
            /* IF_ABSENT  */ ((value.kc === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Kc, $.BER)(value.kc, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendGroupCallInfoRes(value, elGetter);
}


/* eslint-enable */
