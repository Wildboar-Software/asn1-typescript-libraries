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
import { ClearCause, _decode_ClearCause, _encode_ClearCause } from "../AIN-Parameters/ClearCause.ta.mjs";
// export { ClearCause, _decode_ClearCause, _encode_ClearCause } from "../AIN-Parameters/ClearCause.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
import { CcID, _decode_CcID, _encode_CcID } from "../AIN-Parameters/CcID.ta.mjs";
// export { CcID, _decode_CcID, _encode_CcID } from "../AIN-Parameters/CcID.ta.mjs";
import { BCMType, _decode_BCMType, _encode_BCMType } from "../AIN-Parameters/BCMType.ta.mjs";
// export { BCMType, _decode_BCMType, _encode_BCMType } from "../AIN-Parameters/BCMType.ta.mjs";
import { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";
// export { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";
import { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../AIN-Parameters/CollectedDigits.ta.mjs";
// export { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../AIN-Parameters/CollectedDigits.ta.mjs";
import { CollectedAddressInfo, _decode_CollectedAddressInfo, _encode_CollectedAddressInfo } from "../AIN-Parameters/CollectedAddressInfo.ta.mjs";
// export { CollectedAddressInfo, _decode_CollectedAddressInfo, _encode_CollectedAddressInfo } from "../AIN-Parameters/CollectedAddressInfo.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
import { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../AIN-Parameters/FailureCause.ta.mjs";
// export { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../AIN-Parameters/FailureCause.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { AMAMeasurement, _decode_AMAMeasurement, _encode_AMAMeasurement } from "../AIN-Parameters/AMAMeasurement.ta.mjs";
// export { AMAMeasurement, _decode_AMAMeasurement, _encode_AMAMeasurement } from "../AIN-Parameters/AMAMeasurement.ta.mjs";
import { ClearCauseData, _decode_ClearCauseData, _encode_ClearCauseData } from "../AIN-Parameters/ClearCauseData.ta.mjs";
// export { ClearCauseData, _decode_ClearCauseData, _encode_ClearCauseData } from "../AIN-Parameters/ClearCauseData.ta.mjs";
import { IPReturnBlock, _decode_IPReturnBlock, _encode_IPReturnBlock } from "../AIN-Parameters/IPReturnBlock.ta.mjs";
// export { IPReturnBlock, _decode_IPReturnBlock, _encode_IPReturnBlock } from "../AIN-Parameters/IPReturnBlock.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary CTRClearArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTRClearArg ::= SEQUENCE{
 *             clearCause ClearCause,
 *             legID LegID OPTIONAL,
 *             ccID                          CcID OPTIONAL,
 *             bCMType BCMType OPTIONAL,
 *             pointInCall PointInCall OPTIONAL,
 *             collectedDigits CollectedDigits OPTIONAL,
 *             collectedAddressInfo CollectedAddressInfo OPTIONAL,
 *             carrier Carrier OPTIONAL,
 *             failureCause FailureCause OPTIONAL,
 *             amp1                          Amp1 OPTIONAL,
 *             amp2                          Amp2 OPTIONAL,
 *             aMAMeasurement AMAMeasurement OPTIONAL,
 *             clearCauseData ClearCauseData OPTIONAL,
 *             iPReturnBlock IPReturnBlock OPTIONAL,
 *             extensionParameter                  [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class CTRClearArg {
    constructor (
        /**
         * @summary `clearCause`.
         * @public
         * @readonly
         */
        readonly clearCause: ClearCause,
        /**
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: OPTIONAL<LegID>,
        /**
         * @summary `ccID`.
         * @public
         * @readonly
         */
        readonly ccID: OPTIONAL<CcID>,
        /**
         * @summary `bCMType`.
         * @public
         * @readonly
         */
        readonly bCMType: OPTIONAL<BCMType>,
        /**
         * @summary `pointInCall`.
         * @public
         * @readonly
         */
        readonly pointInCall: OPTIONAL<PointInCall>,
        /**
         * @summary `collectedDigits`.
         * @public
         * @readonly
         */
        readonly collectedDigits: OPTIONAL<CollectedDigits>,
        /**
         * @summary `collectedAddressInfo`.
         * @public
         * @readonly
         */
        readonly collectedAddressInfo: OPTIONAL<CollectedAddressInfo>,
        /**
         * @summary `carrier`.
         * @public
         * @readonly
         */
        readonly carrier: OPTIONAL<Carrier>,
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: OPTIONAL<FailureCause>,
        /**
         * @summary `amp1`.
         * @public
         * @readonly
         */
        readonly amp1: OPTIONAL<Amp1>,
        /**
         * @summary `amp2`.
         * @public
         * @readonly
         */
        readonly amp2: OPTIONAL<Amp2>,
        /**
         * @summary `aMAMeasurement`.
         * @public
         * @readonly
         */
        readonly aMAMeasurement: OPTIONAL<AMAMeasurement>,
        /**
         * @summary `clearCauseData`.
         * @public
         * @readonly
         */
        readonly clearCauseData: OPTIONAL<ClearCauseData>,
        /**
         * @summary `iPReturnBlock`.
         * @public
         * @readonly
         */
        readonly iPReturnBlock: OPTIONAL<IPReturnBlock>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a CTRClearArg
     * @description
     * 
     * This takes an `object` and converts it to a `CTRClearArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CTRClearArg`.
     * @returns {CTRClearArg}
     */
    public static _from_object (_o: { [_K in keyof (CTRClearArg)]: (CTRClearArg)[_K] }): CTRClearArg {
        return new CTRClearArg(_o.clearCause, _o.legID, _o.ccID, _o.bCMType, _o.pointInCall, _o.collectedDigits, _o.collectedAddressInfo, _o.carrier, _o.failureCause, _o.amp1, _o.amp2, _o.aMAMeasurement, _o.clearCauseData, _o.iPReturnBlock, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of CTRClearArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CTRClearArg: $.ComponentSpec[] = [
    new $.ComponentSpec("clearCause", false, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 132)),
    new $.ComponentSpec("ccID", true, $.hasTag(_TagClass.context, 133)),
    new $.ComponentSpec("bCMType", true, $.hasTag(_TagClass.context, 134)),
    new $.ComponentSpec("pointInCall", true, $.hasTag(_TagClass.context, 135)),
    new $.ComponentSpec("collectedDigits", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("collectedAddressInfo", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("failureCause", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("aMAMeasurement", true, $.hasTag(_TagClass.context, 73)),
    new $.ComponentSpec("clearCauseData", true, $.hasTag(_TagClass.context, 74)),
    new $.ComponentSpec("iPReturnBlock", true, $.hasTag(_TagClass.context, 78)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of CTRClearArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CTRClearArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CTRClearArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CTRClearArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CTRClearArg: $.ASN1Decoder<CTRClearArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTRClearArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTRClearArg (el: _Element): CTRClearArg {
    if (!_cached_decoder_for_CTRClearArg) { _cached_decoder_for_CTRClearArg = function (el: _Element): CTRClearArg {
    let clearCause!: ClearCause;
    let legID: OPTIONAL<LegID>;
    let ccID: OPTIONAL<CcID>;
    let bCMType: OPTIONAL<BCMType>;
    let pointInCall: OPTIONAL<PointInCall>;
    let collectedDigits: OPTIONAL<CollectedDigits>;
    let collectedAddressInfo: OPTIONAL<CollectedAddressInfo>;
    let carrier: OPTIONAL<Carrier>;
    let failureCause: OPTIONAL<FailureCause>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let aMAMeasurement: OPTIONAL<AMAMeasurement>;
    let clearCauseData: OPTIONAL<ClearCauseData>;
    let iPReturnBlock: OPTIONAL<IPReturnBlock>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "clearCause": (_el: _Element): void => { clearCause = _decode_ClearCause(_el); },
        "legID": (_el: _Element): void => { legID = _decode_LegID(_el); },
        "ccID": (_el: _Element): void => { ccID = _decode_CcID(_el); },
        "bCMType": (_el: _Element): void => { bCMType = _decode_BCMType(_el); },
        "pointInCall": (_el: _Element): void => { pointInCall = _decode_PointInCall(_el); },
        "collectedDigits": (_el: _Element): void => { collectedDigits = _decode_CollectedDigits(_el); },
        "collectedAddressInfo": (_el: _Element): void => { collectedAddressInfo = _decode_CollectedAddressInfo(_el); },
        "carrier": (_el: _Element): void => { carrier = _decode_Carrier(_el); },
        "failureCause": (_el: _Element): void => { failureCause = _decode_FailureCause(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "aMAMeasurement": (_el: _Element): void => { aMAMeasurement = _decode_AMAMeasurement(_el); },
        "clearCauseData": (_el: _Element): void => { clearCauseData = _decode_ClearCauseData(_el); },
        "iPReturnBlock": (_el: _Element): void => { iPReturnBlock = _decode_IPReturnBlock(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CTRClearArg,
        _extension_additions_list_spec_for_CTRClearArg,
        _root_component_type_list_2_spec_for_CTRClearArg,
        undefined,
    );
    return new CTRClearArg(
        clearCause,
        legID,
        ccID,
        bCMType,
        pointInCall,
        collectedDigits,
        collectedAddressInfo,
        carrier,
        failureCause,
        amp1,
        amp2,
        aMAMeasurement,
        clearCauseData,
        iPReturnBlock,
        extensionParameter
    );
}; }
    return _cached_decoder_for_CTRClearArg(el);
}

let _cached_encoder_for_CTRClearArg: $.ASN1Encoder<CTRClearArg> | null = null;

/**
 * @summary Encodes a(n) CTRClearArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTRClearArg, encoded as an ASN.1 Element.
 */
export
function _encode_CTRClearArg (value: CTRClearArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTRClearArg) { _cached_encoder_for_CTRClearArg = function (value: CTRClearArg, elGetter: $.ASN1Encoder<CTRClearArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ClearCause(value.clearCause, $.BER),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : _encode_LegID(value.legID, $.BER)),
            /* IF_ABSENT  */ ((value.ccID === undefined) ? undefined : _encode_CcID(value.ccID, $.BER)),
            /* IF_ABSENT  */ ((value.bCMType === undefined) ? undefined : _encode_BCMType(value.bCMType, $.BER)),
            /* IF_ABSENT  */ ((value.pointInCall === undefined) ? undefined : _encode_PointInCall(value.pointInCall, $.BER)),
            /* IF_ABSENT  */ ((value.collectedDigits === undefined) ? undefined : _encode_CollectedDigits(value.collectedDigits, $.BER)),
            /* IF_ABSENT  */ ((value.collectedAddressInfo === undefined) ? undefined : _encode_CollectedAddressInfo(value.collectedAddressInfo, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : _encode_Carrier(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.failureCause === undefined) ? undefined : _encode_FailureCause(value.failureCause, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.aMAMeasurement === undefined) ? undefined : _encode_AMAMeasurement(value.aMAMeasurement, $.BER)),
            /* IF_ABSENT  */ ((value.clearCauseData === undefined) ? undefined : _encode_ClearCauseData(value.clearCauseData, $.BER)),
            /* IF_ABSENT  */ ((value.iPReturnBlock === undefined) ? undefined : _encode_IPReturnBlock(value.iPReturnBlock, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CTRClearArg(value, elGetter);
}


/* eslint-enable */
