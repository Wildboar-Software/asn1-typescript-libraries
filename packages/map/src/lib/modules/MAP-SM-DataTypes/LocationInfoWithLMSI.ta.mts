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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
// export { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { Additional_Number, _decode_Additional_Number, _encode_Additional_Number } from "../MAP-SM-DataTypes/Additional-Number.ta.mjs";
// export { Additional_Number, _decode_Additional_Number, _encode_Additional_Number } from "../MAP-SM-DataTypes/Additional-Number.ta.mjs";
import { NetworkNodeDiameterAddress, _decode_NetworkNodeDiameterAddress, _encode_NetworkNodeDiameterAddress } from "../MAP-CommonDataTypes/NetworkNodeDiameterAddress.ta.mjs";
// export { NetworkNodeDiameterAddress, _decode_NetworkNodeDiameterAddress, _encode_NetworkNodeDiameterAddress } from "../MAP-CommonDataTypes/NetworkNodeDiameterAddress.ta.mjs";


/**
 * @summary LocationInfoWithLMSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationInfoWithLMSI ::= SEQUENCE {
 *     networkNode-Number    [1] ISDN-AddressString,
 *     lmsi    LMSI    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     gprsNodeIndicator    [5]    NULL    OPTIONAL,
 *     -- gprsNodeIndicator is set only if the SGSN number is sent as the 
 *     -- Network Node Number
 *     additional-Number    [6] Additional-Number    OPTIONAL,
 *     networkNodeDiameterAddress    [7] NetworkNodeDiameterAddress    OPTIONAL,
 *     additionalNetworkNodeDiameterAddress    [8] NetworkNodeDiameterAddress    OPTIONAL,
 *     thirdNumber    [9] Additional-Number    OPTIONAL,
 *     thirdNetworkNodeDiameterAddress    [10] NetworkNodeDiameterAddress    OPTIONAL,
 *     imsNodeIndicator    [11] NULL    OPTIONAL, 
 *     -- gprsNodeIndicator and imsNodeIndicator shall not both be present.
 *     -- additionalNumber and thirdNumber shall not both contain the same type of number. 
 *     smsf-3gpp-Number    [12]    ISDN-AddressString    OPTIONAL,
 *     smsf-3gpp-DiameterAddress    [13]    NetworkNodeDiameterAddress    OPTIONAL,
 *     smsf-non-3gpp-Number    [14]    ISDN-AddressString    OPTIONAL,
 *     smsf-non-3gpp-DiameterAddress    [15]    NetworkNodeDiameterAddress    OPTIONAL,
 *     smsf-3gpp-address-indicator    [16]    NULL    OPTIONAL,
 *     smsf-non-3gpp-address-indicator    [17]    NULL    OPTIONAL
 *     --
 *     -- If smsf-supportIndicator was not included in the request, in RoutingInfoForSM-Arg, 
 *     -- then smsf-3gpp Number/DiameterAddress, smsf-non-3gpp Number/DiameterAddress and
 *     -- smsf-address-indicator and smsf-non-3gpp-address-indicator shall be absent.
 *     -- The HLR may use the networkNode-Number/networkNodeDiameterAddress to indicate the
 *     -- 3GPP-SMSF address as applicable.
 *     -- The HLR may use the additional-Number, additionalNetworkNodeDiameterAddress to 
 *     -- indicate the Non-3GPP-SMSF address as applicable
 *     --
 *     -- If smsf-3gpp-address-indicator is present, it indicates that the networkNode-Number
 *     -- (and networkNodeDiameterAddress, if present) contains the address of an SMSF for
 *     -- 3GPP access.
 *     --
 *     -- If smsf-non-3gpp-address-indicator is present, it indicates that the
 *     -- networkNode-Number (and networkNodeDiameterAddress, if present) contains the
 *     -- address of an SMSF for non 3GPP access.
 *     --
 *     -- At most one of gprsNodeIndicator, imsNodeIndicator, smsf-3gpp-address-indicator
 *     -- and smsf-non-3gpp-address-indicator shall be present. Absence of all these
 *     -- indicators indicate that the networkNode-Number (and networkNodeDiameterAddress,
 *     -- if present) contains the address of an MSC/MME.
 * 
 *     }
 * ```
 * 
 * @class
 */
export
class LocationInfoWithLMSI {
    constructor (
        /**
         * @summary `networkNode_Number`.
         * @public
         * @readonly
         */
        readonly networkNode_Number: ISDN_AddressString,
        /**
         * @summary `lmsi`.
         * @public
         * @readonly
         */
        readonly lmsi: OPTIONAL<LMSI>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `gprsNodeIndicator`.
         * @public
         * @readonly
         */
        readonly gprsNodeIndicator: OPTIONAL<NULL>,
        /**
         * @summary `additional_Number`.
         * @public
         * @readonly
         */
        readonly additional_Number: OPTIONAL<Additional_Number>,
        /**
         * @summary `networkNodeDiameterAddress`.
         * @public
         * @readonly
         */
        readonly networkNodeDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>,
        /**
         * @summary `additionalNetworkNodeDiameterAddress`.
         * @public
         * @readonly
         */
        readonly additionalNetworkNodeDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>,
        /**
         * @summary `thirdNumber`.
         * @public
         * @readonly
         */
        readonly thirdNumber: OPTIONAL<Additional_Number>,
        /**
         * @summary `thirdNetworkNodeDiameterAddress`.
         * @public
         * @readonly
         */
        readonly thirdNetworkNodeDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>,
        /**
         * @summary `imsNodeIndicator`.
         * @public
         * @readonly
         */
        readonly imsNodeIndicator: OPTIONAL<NULL>,
        /**
         * @summary `smsf_3gpp_Number`.
         * @public
         * @readonly
         */
        readonly smsf_3gpp_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `smsf_3gpp_DiameterAddress`.
         * @public
         * @readonly
         */
        readonly smsf_3gpp_DiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>,
        /**
         * @summary `smsf_non_3gpp_Number`.
         * @public
         * @readonly
         */
        readonly smsf_non_3gpp_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `smsf_non_3gpp_DiameterAddress`.
         * @public
         * @readonly
         */
        readonly smsf_non_3gpp_DiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>,
        /**
         * @summary `smsf_3gpp_address_indicator`.
         * @public
         * @readonly
         */
        readonly smsf_3gpp_address_indicator: OPTIONAL<NULL>,
        /**
         * @summary `smsf_non_3gpp_address_indicator`.
         * @public
         * @readonly
         */
        readonly smsf_non_3gpp_address_indicator: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LocationInfoWithLMSI
     * @description
     * 
     * This takes an `object` and converts it to a `LocationInfoWithLMSI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationInfoWithLMSI`.
     * @returns {LocationInfoWithLMSI}
     */
    public static _from_object (_o: { [_K in keyof (LocationInfoWithLMSI)]: (LocationInfoWithLMSI)[_K] }): LocationInfoWithLMSI {
        return new LocationInfoWithLMSI(_o.networkNode_Number, _o.lmsi, _o.extensionContainer, _o.gprsNodeIndicator, _o.additional_Number, _o.networkNodeDiameterAddress, _o.additionalNetworkNodeDiameterAddress, _o.thirdNumber, _o.thirdNetworkNodeDiameterAddress, _o.imsNodeIndicator, _o.smsf_3gpp_Number, _o.smsf_3gpp_DiameterAddress, _o.smsf_non_3gpp_Number, _o.smsf_non_3gpp_DiameterAddress, _o.smsf_3gpp_address_indicator, _o.smsf_non_3gpp_address_indicator, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of LocationInfoWithLMSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocationInfoWithLMSI: $.ComponentSpec[] = [
    new $.ComponentSpec("networkNode-Number", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("lmsi", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LocationInfoWithLMSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocationInfoWithLMSI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocationInfoWithLMSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocationInfoWithLMSI: $.ComponentSpec[] = [
    new $.ComponentSpec("gprsNodeIndicator", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("additional-Number", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("networkNodeDiameterAddress", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("additionalNetworkNodeDiameterAddress", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("thirdNumber", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("thirdNetworkNodeDiameterAddress", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("imsNodeIndicator", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("smsf-3gpp-Number", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("smsf-3gpp-DiameterAddress", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("smsf-non-3gpp-Number", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("smsf-non-3gpp-DiameterAddress", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("smsf-3gpp-address-indicator", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("smsf-non-3gpp-address-indicator", true, $.hasTag(_TagClass.context, 17), undefined, undefined)
];

let _cached_decoder_for_LocationInfoWithLMSI: $.ASN1Decoder<LocationInfoWithLMSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationInfoWithLMSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationInfoWithLMSI (el: _Element): LocationInfoWithLMSI {
    if (!_cached_decoder_for_LocationInfoWithLMSI) { _cached_decoder_for_LocationInfoWithLMSI = function (el: _Element): LocationInfoWithLMSI {
    let networkNode_Number!: ISDN_AddressString;
    let lmsi: OPTIONAL<LMSI>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let gprsNodeIndicator: OPTIONAL<NULL>;
    let additional_Number: OPTIONAL<Additional_Number>;
    let networkNodeDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>;
    let additionalNetworkNodeDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>;
    let thirdNumber: OPTIONAL<Additional_Number>;
    let thirdNetworkNodeDiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>;
    let imsNodeIndicator: OPTIONAL<NULL>;
    let smsf_3gpp_Number: OPTIONAL<ISDN_AddressString>;
    let smsf_3gpp_DiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>;
    let smsf_non_3gpp_Number: OPTIONAL<ISDN_AddressString>;
    let smsf_non_3gpp_DiameterAddress: OPTIONAL<NetworkNodeDiameterAddress>;
    let smsf_3gpp_address_indicator: OPTIONAL<NULL>;
    let smsf_non_3gpp_address_indicator: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "networkNode-Number": (_el: _Element): void => { networkNode_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "lmsi": (_el: _Element): void => { lmsi = _decode_LMSI(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "gprsNodeIndicator": (_el: _Element): void => { gprsNodeIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "additional-Number": (_el: _Element): void => { additional_Number = $._decode_explicit<Additional_Number>(() => _decode_Additional_Number)(_el); },
        "networkNodeDiameterAddress": (_el: _Element): void => { networkNodeDiameterAddress = $._decode_implicit<NetworkNodeDiameterAddress>(() => _decode_NetworkNodeDiameterAddress)(_el); },
        "additionalNetworkNodeDiameterAddress": (_el: _Element): void => { additionalNetworkNodeDiameterAddress = $._decode_implicit<NetworkNodeDiameterAddress>(() => _decode_NetworkNodeDiameterAddress)(_el); },
        "thirdNumber": (_el: _Element): void => { thirdNumber = $._decode_explicit<Additional_Number>(() => _decode_Additional_Number)(_el); },
        "thirdNetworkNodeDiameterAddress": (_el: _Element): void => { thirdNetworkNodeDiameterAddress = $._decode_implicit<NetworkNodeDiameterAddress>(() => _decode_NetworkNodeDiameterAddress)(_el); },
        "imsNodeIndicator": (_el: _Element): void => { imsNodeIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "smsf-3gpp-Number": (_el: _Element): void => { smsf_3gpp_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "smsf-3gpp-DiameterAddress": (_el: _Element): void => { smsf_3gpp_DiameterAddress = $._decode_implicit<NetworkNodeDiameterAddress>(() => _decode_NetworkNodeDiameterAddress)(_el); },
        "smsf-non-3gpp-Number": (_el: _Element): void => { smsf_non_3gpp_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "smsf-non-3gpp-DiameterAddress": (_el: _Element): void => { smsf_non_3gpp_DiameterAddress = $._decode_implicit<NetworkNodeDiameterAddress>(() => _decode_NetworkNodeDiameterAddress)(_el); },
        "smsf-3gpp-address-indicator": (_el: _Element): void => { smsf_3gpp_address_indicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "smsf-non-3gpp-address-indicator": (_el: _Element): void => { smsf_non_3gpp_address_indicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocationInfoWithLMSI,
        _extension_additions_list_spec_for_LocationInfoWithLMSI,
        _root_component_type_list_2_spec_for_LocationInfoWithLMSI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LocationInfoWithLMSI(
        networkNode_Number,
        lmsi,
        extensionContainer,
        gprsNodeIndicator,
        additional_Number,
        networkNodeDiameterAddress,
        additionalNetworkNodeDiameterAddress,
        thirdNumber,
        thirdNetworkNodeDiameterAddress,
        imsNodeIndicator,
        smsf_3gpp_Number,
        smsf_3gpp_DiameterAddress,
        smsf_non_3gpp_Number,
        smsf_non_3gpp_DiameterAddress,
        smsf_3gpp_address_indicator,
        smsf_non_3gpp_address_indicator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LocationInfoWithLMSI(el);
}

let _cached_encoder_for_LocationInfoWithLMSI: $.ASN1Encoder<LocationInfoWithLMSI> | null = null;

/**
 * @summary Encodes a(n) LocationInfoWithLMSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationInfoWithLMSI, encoded as an ASN.1 Element.
 */
export
function _encode_LocationInfoWithLMSI (value: LocationInfoWithLMSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationInfoWithLMSI) { _cached_encoder_for_LocationInfoWithLMSI = function (value: LocationInfoWithLMSI, elGetter: $.ASN1Encoder<LocationInfoWithLMSI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.networkNode_Number, $.BER),
            /* IF_ABSENT  */ ((value.lmsi === undefined) ? undefined : _encode_LMSI(value.lmsi, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.gprsNodeIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.gprsNodeIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.additional_Number === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_Additional_Number, $.BER)(value.additional_Number, $.BER)),
            /* IF_ABSENT  */ ((value.networkNodeDiameterAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_NetworkNodeDiameterAddress, $.BER)(value.networkNodeDiameterAddress, $.BER)),
            /* IF_ABSENT  */ ((value.additionalNetworkNodeDiameterAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_NetworkNodeDiameterAddress, $.BER)(value.additionalNetworkNodeDiameterAddress, $.BER)),
            /* IF_ABSENT  */ ((value.thirdNumber === undefined) ? undefined : $._encode_explicit(_TagClass.context, 9, () => _encode_Additional_Number, $.BER)(value.thirdNumber, $.BER)),
            /* IF_ABSENT  */ ((value.thirdNetworkNodeDiameterAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_NetworkNodeDiameterAddress, $.BER)(value.thirdNetworkNodeDiameterAddress, $.BER)),
            /* IF_ABSENT  */ ((value.imsNodeIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.imsNodeIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.smsf_3gpp_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_ISDN_AddressString, $.BER)(value.smsf_3gpp_Number, $.BER)),
            /* IF_ABSENT  */ ((value.smsf_3gpp_DiameterAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_NetworkNodeDiameterAddress, $.BER)(value.smsf_3gpp_DiameterAddress, $.BER)),
            /* IF_ABSENT  */ ((value.smsf_non_3gpp_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_ISDN_AddressString, $.BER)(value.smsf_non_3gpp_Number, $.BER)),
            /* IF_ABSENT  */ ((value.smsf_non_3gpp_DiameterAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_NetworkNodeDiameterAddress, $.BER)(value.smsf_non_3gpp_DiameterAddress, $.BER)),
            /* IF_ABSENT  */ ((value.smsf_3gpp_address_indicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => $._encodeNull, $.BER)(value.smsf_3gpp_address_indicator, $.BER)),
            /* IF_ABSENT  */ ((value.smsf_non_3gpp_address_indicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => $._encodeNull, $.BER)(value.smsf_non_3gpp_address_indicator, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocationInfoWithLMSI(value, elGetter);
}


/* eslint-enable */
