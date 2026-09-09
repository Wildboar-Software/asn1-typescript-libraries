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
import { type AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../CAP-datatypes/AlertingPattern.ta.mjs";
import { type Carrier, _decode_Carrier, _encode_Carrier } from "../CAP-datatypes/Carrier.ta.mjs";
import { type ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../CAP-datatypes/ChargeNumber.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { type GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../CAP-datatypes/GenericNumbers.ta.mjs";
import { type NAOliInfo, _decode_NAOliInfo, _encode_NAOliInfo } from "../CAP-datatypes/NAOliInfo.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../CAP-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../Core-INAP-CS1-DataTypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../Core-INAP-CS1-DataTypes/CallingPartysCategory.ta.mjs";
import { CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../MAP-MS-DataTypes/CUG-Interlock.ta.mjs";
// export { CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../MAP-MS-DataTypes/CUG-Interlock.ta.mjs";
import { SuppressionOfAnnouncement, _decode_SuppressionOfAnnouncement, _encode_SuppressionOfAnnouncement } from "../MAP-CH-DataTypes/SuppressionOfAnnouncement.ta.mjs";
// export { SuppressionOfAnnouncement, _decode_SuppressionOfAnnouncement, _encode_SuppressionOfAnnouncement } from "../MAP-CH-DataTypes/SuppressionOfAnnouncement.ta.mjs";
import { ContinueWithArgumentArgExtension, _decode_ContinueWithArgumentArgExtension, _encode_ContinueWithArgumentArgExtension } from "../CAP-gsmSSF-gsmSCF-ops-args/ContinueWithArgumentArgExtension.ta.mjs";
// export { ContinueWithArgumentArgExtension, _decode_ContinueWithArgumentArgExtension, _encode_ContinueWithArgumentArgExtension } from "../CAP-gsmSSF-gsmSCF-ops-args/ContinueWithArgumentArgExtension.ta.mjs";


/**
 * @summary ContinueWithArgumentArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContinueWithArgumentArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     alertingPattern            [1] AlertingPattern                OPTIONAL,
 *     extensions                [6] Extensions {bound}            OPTIONAL,
 *     serviceInteractionIndicatorsTwo    [7] ServiceInteractionIndicatorsTwo        OPTIONAL,
 *     callingPartysCategory        [12] CallingPartysCategory            OPTIONAL,
 *     genericNumbers            [16] GenericNumbers {bound}            OPTIONAL,
 *     cug-Interlock            [17] CUG-Interlock                OPTIONAL,
 *     cug-OutgoingAccess            [18] NULL                    OPTIONAL,
 *     chargeNumber            [50] ChargeNumber {bound}            OPTIONAL,
 *     carrier                [52] Carrier {bound}            OPTIONAL,
 *     suppressionOfAnnouncement        [55] SuppressionOfAnnouncement        OPTIONAL,
 *     naOliInfo                [56] NAOliInfo                OPTIONAL,
 *     bor-InterrogationRequested        [57] NULL                    OPTIONAL,
 *     suppress-O-CSI            [58] NULL                    OPTIONAL,
 *     continueWithArgumentArgExtension    [59] ContinueWithArgumentArgExtension {bound} OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class ContinueWithArgumentArg {
    constructor (
        /**
         * @summary `alertingPattern`.
         * @public
         * @readonly
         */
        readonly alertingPattern: OPTIONAL<AlertingPattern>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary `serviceInteractionIndicatorsTwo`.
         * @public
         * @readonly
         */
        readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        /**
         * @summary `callingPartysCategory`.
         * @public
         * @readonly
         */
        readonly callingPartysCategory: OPTIONAL<CallingPartysCategory>,
        /**
         * @summary `genericNumbers`.
         * @public
         * @readonly
         */
        readonly genericNumbers: OPTIONAL<GenericNumbers>,
        /**
         * @summary `cug_Interlock`.
         * @public
         * @readonly
         */
        readonly cug_Interlock: OPTIONAL<CUG_Interlock>,
        /**
         * @summary `cug_OutgoingAccess`.
         * @public
         * @readonly
         */
        readonly cug_OutgoingAccess: OPTIONAL<NULL>,
        /**
         * @summary `chargeNumber`.
         * @public
         * @readonly
         */
        readonly chargeNumber: OPTIONAL<ChargeNumber>,
        /**
         * @summary `carrier`.
         * @public
         * @readonly
         */
        readonly carrier: OPTIONAL<Carrier>,
        /**
         * @summary `suppressionOfAnnouncement`.
         * @public
         * @readonly
         */
        readonly suppressionOfAnnouncement: OPTIONAL<SuppressionOfAnnouncement>,
        /**
         * @summary `naOliInfo`.
         * @public
         * @readonly
         */
        readonly naOliInfo: OPTIONAL<NAOliInfo>,
        /**
         * @summary `bor_InterrogationRequested`.
         * @public
         * @readonly
         */
        readonly bor_InterrogationRequested: OPTIONAL<NULL>,
        /**
         * @summary `suppress_O_CSI`.
         * @public
         * @readonly
         */
        readonly suppress_O_CSI: OPTIONAL<NULL>,
        /**
         * @summary `continueWithArgumentArgExtension`.
         * @public
         * @readonly
         */
        readonly continueWithArgumentArgExtension: OPTIONAL<ContinueWithArgumentArgExtension>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContinueWithArgumentArg
     * @description
     * 
     * This takes an `object` and converts it to a `ContinueWithArgumentArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContinueWithArgumentArg`.
     * @returns {ContinueWithArgumentArg}
     */
    public static _from_object (_o: { [_K in keyof (ContinueWithArgumentArg)]: (ContinueWithArgumentArg)[_K] }): ContinueWithArgumentArg {
        return new ContinueWithArgumentArg(_o.alertingPattern, _o.extensions, _o.serviceInteractionIndicatorsTwo, _o.callingPartysCategory, _o.genericNumbers, _o.cug_Interlock, _o.cug_OutgoingAccess, _o.chargeNumber, _o.carrier, _o.suppressionOfAnnouncement, _o.naOliInfo, _o.bor_InterrogationRequested, _o.suppress_O_CSI, _o.continueWithArgumentArgExtension, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ContinueWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ContinueWithArgumentArg: $.ComponentSpec[] = [
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("genericNumbers", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("cug-Interlock", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("cug-OutgoingAccess", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("chargeNumber", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("suppressionOfAnnouncement", true, $.hasTag(_TagClass.context, 55)),
    new $.ComponentSpec("naOliInfo", true, $.hasTag(_TagClass.context, 56)),
    new $.ComponentSpec("bor-InterrogationRequested", true, $.hasTag(_TagClass.context, 57)),
    new $.ComponentSpec("suppress-O-CSI", true, $.hasTag(_TagClass.context, 58)),
    new $.ComponentSpec("continueWithArgumentArgExtension", true, $.hasTag(_TagClass.context, 59))
];

/**
 * @summary The Trailing Root Component Types of ContinueWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ContinueWithArgumentArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ContinueWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ContinueWithArgumentArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ContinueWithArgumentArg: $.ASN1Decoder<ContinueWithArgumentArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContinueWithArgumentArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContinueWithArgumentArg (el: _Element): ContinueWithArgumentArg {
    if (!_cached_decoder_for_ContinueWithArgumentArg) { _cached_decoder_for_ContinueWithArgumentArg = function (el: _Element): ContinueWithArgumentArg {
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let extensions: OPTIONAL<Extensions>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    let genericNumbers: OPTIONAL<GenericNumbers>;
    let cug_Interlock: OPTIONAL<CUG_Interlock>;
    let cug_OutgoingAccess: OPTIONAL<NULL>;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let carrier: OPTIONAL<Carrier>;
    let suppressionOfAnnouncement: OPTIONAL<SuppressionOfAnnouncement>;
    let naOliInfo: OPTIONAL<NAOliInfo>;
    let bor_InterrogationRequested: OPTIONAL<NULL>;
    let suppress_O_CSI: OPTIONAL<NULL>;
    let continueWithArgumentArgExtension: OPTIONAL<ContinueWithArgumentArgExtension>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); },
        "genericNumbers": (_el: _Element): void => { genericNumbers = $._decode_implicit<GenericNumbers>(() => _decode_GenericNumbers)(_el); },
        "cug-Interlock": (_el: _Element): void => { cug_Interlock = $._decode_implicit<CUG_Interlock>(() => _decode_CUG_Interlock)(_el); },
        "cug-OutgoingAccess": (_el: _Element): void => { cug_OutgoingAccess = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = $._decode_implicit<ChargeNumber>(() => _decode_ChargeNumber)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "suppressionOfAnnouncement": (_el: _Element): void => { suppressionOfAnnouncement = $._decode_implicit<SuppressionOfAnnouncement>(() => _decode_SuppressionOfAnnouncement)(_el); },
        "naOliInfo": (_el: _Element): void => { naOliInfo = $._decode_implicit<NAOliInfo>(() => _decode_NAOliInfo)(_el); },
        "bor-InterrogationRequested": (_el: _Element): void => { bor_InterrogationRequested = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "suppress-O-CSI": (_el: _Element): void => { suppress_O_CSI = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "continueWithArgumentArgExtension": (_el: _Element): void => { continueWithArgumentArgExtension = $._decode_implicit<ContinueWithArgumentArgExtension>(() => _decode_ContinueWithArgumentArgExtension)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContinueWithArgumentArg,
        _extension_additions_list_spec_for_ContinueWithArgumentArg,
        _root_component_type_list_2_spec_for_ContinueWithArgumentArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ContinueWithArgumentArg(
        alertingPattern,
        extensions,
        serviceInteractionIndicatorsTwo,
        callingPartysCategory,
        genericNumbers,
        cug_Interlock,
        cug_OutgoingAccess,
        chargeNumber,
        carrier,
        suppressionOfAnnouncement,
        naOliInfo,
        bor_InterrogationRequested,
        suppress_O_CSI,
        continueWithArgumentArgExtension,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ContinueWithArgumentArg(el);
}

let _cached_encoder_for_ContinueWithArgumentArg: $.ASN1Encoder<ContinueWithArgumentArg> | null = null;

/**
 * @summary Encodes a(n) ContinueWithArgumentArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContinueWithArgumentArg, encoded as an ASN.1 Element.
 */
export
function _encode_ContinueWithArgumentArg (value: ContinueWithArgumentArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContinueWithArgumentArg) { _cached_encoder_for_ContinueWithArgumentArg = function (value: ContinueWithArgumentArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.alertingPattern === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Extensions, $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.serviceInteractionIndicatorsTwo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartysCategory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER)),
            /* IF_ABSENT  */ ((value.genericNumbers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_GenericNumbers, $.BER)(value.genericNumbers, $.BER)),
            /* IF_ABSENT  */ ((value.cug_Interlock === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_CUG_Interlock, $.BER)(value.cug_Interlock, $.BER)),
            /* IF_ABSENT  */ ((value.cug_OutgoingAccess === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => $._encodeNull, $.BER)(value.cug_OutgoingAccess, $.BER)),
            /* IF_ABSENT  */ ((value.chargeNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => _encode_ChargeNumber, $.BER)(value.chargeNumber, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 52, () => _encode_Carrier, $.BER)(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.suppressionOfAnnouncement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 55, () => _encode_SuppressionOfAnnouncement, $.BER)(value.suppressionOfAnnouncement, $.BER)),
            /* IF_ABSENT  */ ((value.naOliInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 56, () => _encode_NAOliInfo, $.BER)(value.naOliInfo, $.BER)),
            /* IF_ABSENT  */ ((value.bor_InterrogationRequested === undefined) ? undefined : $._encode_implicit(_TagClass.context, 57, () => $._encodeNull, $.BER)(value.bor_InterrogationRequested, $.BER)),
            /* IF_ABSENT  */ ((value.suppress_O_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 58, () => $._encodeNull, $.BER)(value.suppress_O_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.continueWithArgumentArgExtension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 59, () => _encode_ContinueWithArgumentArgExtension, $.BER)(value.continueWithArgumentArgExtension, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ContinueWithArgumentArg(value, elGetter);
}


/* eslint-enable */
