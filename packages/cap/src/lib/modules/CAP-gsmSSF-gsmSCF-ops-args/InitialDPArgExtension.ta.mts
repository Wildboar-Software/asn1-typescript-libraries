/* eslint-disable */
import {
    OPTIONAL,
    NULL,
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
import { type BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../CAP-datatypes/BearerCapability.ta.mjs";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../CAP-datatypes/CalledPartyNumber.ta.mjs";
import { type LowLayerCompatibility, _decode_LowLayerCompatibility, _encode_LowLayerCompatibility } from "../CAP-datatypes/LowLayerCompatibility.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { MS_Classmark2, _decode_MS_Classmark2, _encode_MS_Classmark2 } from "../MAP-MS-DataTypes/MS-Classmark2.ta.mjs";
// export { MS_Classmark2, _decode_MS_Classmark2, _encode_MS_Classmark2 } from "../MAP-MS-DataTypes/MS-Classmark2.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";
import { SupportedCamelPhases, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
// export { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
import { OfferedCamel4Functionalities, _decode_OfferedCamel4Functionalities, _encode_OfferedCamel4Functionalities } from "../MAP-MS-DataTypes/OfferedCamel4Functionalities.ta.mjs";
// export { OfferedCamel4Functionalities, OfferedCamel4Functionalities_initiateCallAttempt /* IMPORTED_LONG_NAMED_BIT */, initiateCallAttempt /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_splitLeg /* IMPORTED_LONG_NAMED_BIT */, splitLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_moveLeg /* IMPORTED_LONG_NAMED_BIT */, moveLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_disconnectLeg /* IMPORTED_LONG_NAMED_BIT */, disconnectLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_entityReleased /* IMPORTED_LONG_NAMED_BIT */, entityReleased /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_dfc_WithArgument /* IMPORTED_LONG_NAMED_BIT */, dfc_WithArgument /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_playTone /* IMPORTED_LONG_NAMED_BIT */, playTone /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_dtmf_MidCall /* IMPORTED_LONG_NAMED_BIT */, dtmf_MidCall /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_chargingIndicator /* IMPORTED_LONG_NAMED_BIT */, chargingIndicator /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_alertingDP /* IMPORTED_LONG_NAMED_BIT */, alertingDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_locationAtAlerting /* IMPORTED_LONG_NAMED_BIT */, locationAtAlerting /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_changeOfPositionDP /* IMPORTED_LONG_NAMED_BIT */, changeOfPositionDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_or_Interactions /* IMPORTED_LONG_NAMED_BIT */, or_Interactions /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_warningToneEnhancements /* IMPORTED_LONG_NAMED_BIT */, warningToneEnhancements /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_cf_Enhancements /* IMPORTED_LONG_NAMED_BIT */, cf_Enhancements /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_subscribedEnhancedDialledServices /* IMPORTED_LONG_NAMED_BIT */, subscribedEnhancedDialledServices /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_servingNetworkEnhancedDialledServices /* IMPORTED_LONG_NAMED_BIT */, servingNetworkEnhancedDialledServices /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_criteriaForChangeOfPositionDP /* IMPORTED_LONG_NAMED_BIT */, criteriaForChangeOfPositionDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_serviceChangeDP /* IMPORTED_LONG_NAMED_BIT */, serviceChangeDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_collectInformation /* IMPORTED_LONG_NAMED_BIT */, collectInformation /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4Functionalities, _encode_OfferedCamel4Functionalities } from "../MAP-MS-DataTypes/OfferedCamel4Functionalities.ta.mjs";
import { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
// export { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
import { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../Core-INAP-CS1-DataTypes/HighLayerCompatibility.ta.mjs";
// export { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../Core-INAP-CS1-DataTypes/HighLayerCompatibility.ta.mjs";
import { UU_Data, _decode_UU_Data, _encode_UU_Data } from "../MAP-CH-DataTypes/UU-Data.ta.mjs";
// export { UU_Data, _decode_UU_Data, _encode_UU_Data } from "../MAP-CH-DataTypes/UU-Data.ta.mjs";


/**
 * @summary InitialDPArgExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitialDPArgExtension {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     gmscAddress                [0] ISDN-AddressString            OPTIONAL,
 *     forwardingDestinationNumber        [1] CalledPartyNumber {bound}        OPTIONAL,
 *     ms-Classmark2            [2] MS-Classmark2                OPTIONAL,
 *     iMEI                [3] IMEI                    OPTIONAL,
 *     supportedCamelPhases        [4] SupportedCamelPhases            OPTIONAL,
 *     offeredCamel4Functionalities    [5] OfferedCamel4Functionalities        OPTIONAL,
 *     bearerCapability2            [6] BearerCapability {bound}        OPTIONAL,
 *     ext-basicServiceCode2        [7] Ext-BasicServiceCode            OPTIONAL,
 *     highLayerCompatibility2        [8] HighLayerCompatibility            OPTIONAL,
 *     lowLayerCompatibility        [9] LowLayerCompatibility {bound}        OPTIONAL,
 *     lowLayerCompatibility2        [10] LowLayerCompatibility {bound}        OPTIONAL,
 *     ...,
 *     enhancedDialledServicesAllowed    [11] NULL                    OPTIONAL,
 *     uu-Data                [12] UU-Data                OPTIONAL,
 *     collectInformationAllowed        [13] NULL                    OPTIONAL,
 *     releaseCallArgExtensionAllowed    [14] NULL                    OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class InitialDPArgExtension {
    constructor (
        /**
         * @summary `gmscAddress`.
         * @public
         * @readonly
         */
        readonly gmscAddress: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `forwardingDestinationNumber`.
         * @public
         * @readonly
         */
        readonly forwardingDestinationNumber: OPTIONAL<CalledPartyNumber>,
        /**
         * @summary `ms_Classmark2`.
         * @public
         * @readonly
         */
        readonly ms_Classmark2: OPTIONAL<MS_Classmark2>,
        /**
         * @summary `iMEI`.
         * @public
         * @readonly
         */
        readonly iMEI: OPTIONAL<IMEI>,
        /**
         * @summary `supportedCamelPhases`.
         * @public
         * @readonly
         */
        readonly supportedCamelPhases: OPTIONAL<SupportedCamelPhases>,
        /**
         * @summary `offeredCamel4Functionalities`.
         * @public
         * @readonly
         */
        readonly offeredCamel4Functionalities: OPTIONAL<OfferedCamel4Functionalities>,
        /**
         * @summary `bearerCapability2`.
         * @public
         * @readonly
         */
        readonly bearerCapability2: OPTIONAL<BearerCapability>,
        /**
         * @summary `ext_basicServiceCode2`.
         * @public
         * @readonly
         */
        readonly ext_basicServiceCode2: OPTIONAL<Ext_BasicServiceCode>,
        /**
         * @summary `highLayerCompatibility2`.
         * @public
         * @readonly
         */
        readonly highLayerCompatibility2: OPTIONAL<HighLayerCompatibility>,
        /**
         * @summary `lowLayerCompatibility`.
         * @public
         * @readonly
         */
        readonly lowLayerCompatibility: OPTIONAL<LowLayerCompatibility>,
        /**
         * @summary `lowLayerCompatibility2`.
         * @public
         * @readonly
         */
        readonly lowLayerCompatibility2: OPTIONAL<LowLayerCompatibility>,
        /**
         * @summary `enhancedDialledServicesAllowed`.
         * @public
         * @readonly
         */
        readonly enhancedDialledServicesAllowed: OPTIONAL<NULL>,
        /**
         * @summary `uu_Data`.
         * @public
         * @readonly
         */
        readonly uu_Data: OPTIONAL<UU_Data>,
        /**
         * @summary `collectInformationAllowed`.
         * @public
         * @readonly
         */
        readonly collectInformationAllowed: OPTIONAL<NULL>,
        /**
         * @summary `releaseCallArgExtensionAllowed`.
         * @public
         * @readonly
         */
        readonly releaseCallArgExtensionAllowed: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a InitialDPArgExtension
     * @description
     * 
     * This takes an `object` and converts it to a `InitialDPArgExtension`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitialDPArgExtension`.
     * @returns {InitialDPArgExtension}
     */
    public static _from_object (_o: { [_K in keyof (InitialDPArgExtension)]: (InitialDPArgExtension)[_K] }): InitialDPArgExtension {
        return new InitialDPArgExtension(_o.gmscAddress, _o.forwardingDestinationNumber, _o.ms_Classmark2, _o.iMEI, _o.supportedCamelPhases, _o.offeredCamel4Functionalities, _o.bearerCapability2, _o.ext_basicServiceCode2, _o.highLayerCompatibility2, _o.lowLayerCompatibility, _o.lowLayerCompatibility2, _o.enhancedDialledServicesAllowed, _o.uu_Data, _o.collectInformationAllowed, _o.releaseCallArgExtensionAllowed, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of InitialDPArgExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitialDPArgExtension: $.ComponentSpec[] = [
    new $.ComponentSpec("gmscAddress", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("forwardingDestinationNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ms-Classmark2", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iMEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("supportedCamelPhases", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("offeredCamel4Functionalities", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("bearerCapability2", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("ext-basicServiceCode2", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("highLayerCompatibility2", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("lowLayerCompatibility", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("lowLayerCompatibility2", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of InitialDPArgExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitialDPArgExtension: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitialDPArgExtension
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitialDPArgExtension: $.ComponentSpec[] = [
    new $.ComponentSpec("enhancedDialledServicesAllowed", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("uu-Data", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("collectInformationAllowed", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("releaseCallArgExtensionAllowed", true, $.hasTag(_TagClass.context, 14))
];

let _cached_decoder_for_InitialDPArgExtension: $.ASN1Decoder<InitialDPArgExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitialDPArgExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitialDPArgExtension (el: _Element): InitialDPArgExtension {
    if (!_cached_decoder_for_InitialDPArgExtension) { _cached_decoder_for_InitialDPArgExtension = function (el: _Element): InitialDPArgExtension {
    let gmscAddress: OPTIONAL<ISDN_AddressString>;
    let forwardingDestinationNumber: OPTIONAL<CalledPartyNumber>;
    let ms_Classmark2: OPTIONAL<MS_Classmark2>;
    let iMEI: OPTIONAL<IMEI>;
    let supportedCamelPhases: OPTIONAL<SupportedCamelPhases>;
    let offeredCamel4Functionalities: OPTIONAL<OfferedCamel4Functionalities>;
    let bearerCapability2: OPTIONAL<BearerCapability>;
    let ext_basicServiceCode2: OPTIONAL<Ext_BasicServiceCode>;
    let highLayerCompatibility2: OPTIONAL<HighLayerCompatibility>;
    let lowLayerCompatibility: OPTIONAL<LowLayerCompatibility>;
    let lowLayerCompatibility2: OPTIONAL<LowLayerCompatibility>;
    let enhancedDialledServicesAllowed: OPTIONAL<NULL>;
    let uu_Data: OPTIONAL<UU_Data>;
    let collectInformationAllowed: OPTIONAL<NULL>;
    let releaseCallArgExtensionAllowed: OPTIONAL<NULL>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gmscAddress": (_el: _Element): void => { gmscAddress = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "forwardingDestinationNumber": (_el: _Element): void => { forwardingDestinationNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "ms-Classmark2": (_el: _Element): void => { ms_Classmark2 = $._decode_implicit<MS_Classmark2>(() => _decode_MS_Classmark2)(_el); },
        "iMEI": (_el: _Element): void => { iMEI = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "supportedCamelPhases": (_el: _Element): void => { supportedCamelPhases = $._decode_implicit<SupportedCamelPhases>(() => _decode_SupportedCamelPhases)(_el); },
        "offeredCamel4Functionalities": (_el: _Element): void => { offeredCamel4Functionalities = $._decode_implicit<OfferedCamel4Functionalities>(() => _decode_OfferedCamel4Functionalities)(_el); },
        "bearerCapability2": (_el: _Element): void => { bearerCapability2 = $._decode_implicit<BearerCapability>(() => _decode_BearerCapability)(_el); },
        "ext-basicServiceCode2": (_el: _Element): void => { ext_basicServiceCode2 = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(_el); },
        "highLayerCompatibility2": (_el: _Element): void => { highLayerCompatibility2 = $._decode_implicit<HighLayerCompatibility>(() => _decode_HighLayerCompatibility)(_el); },
        "lowLayerCompatibility": (_el: _Element): void => { lowLayerCompatibility = $._decode_implicit<LowLayerCompatibility>(() => _decode_LowLayerCompatibility)(_el); },
        "lowLayerCompatibility2": (_el: _Element): void => { lowLayerCompatibility2 = $._decode_implicit<LowLayerCompatibility>(() => _decode_LowLayerCompatibility)(_el); },
        "enhancedDialledServicesAllowed": (_el: _Element): void => { enhancedDialledServicesAllowed = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "uu-Data": (_el: _Element): void => { uu_Data = $._decode_implicit<UU_Data>(() => _decode_UU_Data)(_el); },
        "collectInformationAllowed": (_el: _Element): void => { collectInformationAllowed = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "releaseCallArgExtensionAllowed": (_el: _Element): void => { releaseCallArgExtensionAllowed = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitialDPArgExtension,
        _extension_additions_list_spec_for_InitialDPArgExtension,
        _root_component_type_list_2_spec_for_InitialDPArgExtension,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InitialDPArgExtension(
        gmscAddress,
        forwardingDestinationNumber,
        ms_Classmark2,
        iMEI,
        supportedCamelPhases,
        offeredCamel4Functionalities,
        bearerCapability2,
        ext_basicServiceCode2,
        highLayerCompatibility2,
        lowLayerCompatibility,
        lowLayerCompatibility2,
        enhancedDialledServicesAllowed,
        uu_Data,
        collectInformationAllowed,
        releaseCallArgExtensionAllowed,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InitialDPArgExtension(el);
}

let _cached_encoder_for_InitialDPArgExtension: $.ASN1Encoder<InitialDPArgExtension> | null = null;

/**
 * @summary Encodes a(n) InitialDPArgExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitialDPArgExtension, encoded as an ASN.1 Element.
 */
export
function _encode_InitialDPArgExtension (value: InitialDPArgExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitialDPArgExtension) { _cached_encoder_for_InitialDPArgExtension = function (value: InitialDPArgExtension): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.gmscAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.gmscAddress, $.BER)),
            /* IF_ABSENT  */ ((value.forwardingDestinationNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyNumber, $.BER)(value.forwardingDestinationNumber, $.BER)),
            /* IF_ABSENT  */ ((value.ms_Classmark2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MS_Classmark2, $.BER)(value.ms_Classmark2, $.BER)),
            /* IF_ABSENT  */ ((value.iMEI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IMEI, $.BER)(value.iMEI, $.BER)),
            /* IF_ABSENT  */ ((value.supportedCamelPhases === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SupportedCamelPhases, $.BER)(value.supportedCamelPhases, $.BER)),
            /* IF_ABSENT  */ ((value.offeredCamel4Functionalities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_OfferedCamel4Functionalities, $.BER)(value.offeredCamel4Functionalities, $.BER)),
            /* IF_ABSENT  */ ((value.bearerCapability2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_BearerCapability, $.BER)(value.bearerCapability2, $.BER)),
            /* IF_ABSENT  */ ((value.ext_basicServiceCode2 === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_Ext_BasicServiceCode, $.BER)(value.ext_basicServiceCode2, $.BER)),
            /* IF_ABSENT  */ ((value.highLayerCompatibility2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_HighLayerCompatibility, $.BER)(value.highLayerCompatibility2, $.BER)),
            /* IF_ABSENT  */ ((value.lowLayerCompatibility === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_LowLayerCompatibility, $.BER)(value.lowLayerCompatibility, $.BER)),
            /* IF_ABSENT  */ ((value.lowLayerCompatibility2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_LowLayerCompatibility, $.BER)(value.lowLayerCompatibility2, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.enhancedDialledServicesAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER)(value.enhancedDialledServicesAllowed, $.BER)),
            /* IF_ABSENT  */ ((value.uu_Data === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_UU_Data, $.BER)(value.uu_Data, $.BER)),
            /* IF_ABSENT  */ ((value.collectInformationAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER)(value.collectInformationAllowed, $.BER)),
            /* IF_ABSENT  */ ((value.releaseCallArgExtensionAllowed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeNull, $.BER)(value.releaseCallArgExtensionAllowed, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InitialDPArgExtension(value, elGetter);
}


/* eslint-enable */
