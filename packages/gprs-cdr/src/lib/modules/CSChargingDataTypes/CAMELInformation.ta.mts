/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TrunkGroup, _decode_TrunkGroup, _encode_TrunkGroup } from "../CSChargingDataTypes/TrunkGroup.ta.mjs";
import { CAMELInitCFIndicator, _decode_CAMELInitCFIndicator, _encode_CAMELInitCFIndicator, _enum_for_CAMELInitCFIndicator } from "../CSChargingDataTypes/CAMELInitCFIndicator.ta.mjs";
import { CauseForTerm, _decode_CauseForTerm, _encode_CauseForTerm } from "../CSChargingDataTypes/CauseForTerm.ta.mjs";
import { ChangedParameters, _decode_ChangedParameters, _encode_ChangedParameters } from "../CSChargingDataTypes/ChangedParameters.ta.mjs";
import { HLRIntResult, _decode_HLRIntResult, _encode_HLRIntResult } from "../CSChargingDataTypes/HLRIntResult.ta.mjs";


/**
 * @summary CAMELInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELInformation ::= SET {
 *    cAMELDestinationNumber   [1] IMPLICIT SEQUENCE  ( SIZE( 1 ) ) OF
 *       OCTET STRING ( SIZE( 1 .. 41 ) ) OPTIONAL,
 *    connectedNumber          [2] IMPLICIT OCTET STRING OPTIONAL,
 *    roamingNumber            [3] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *    mscOutgoingTKGP          [4] TrunkGroup OPTIONAL,
 *    seizureTime              [5] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    answerTime               [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    releaseTime              [7] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    callDuration             [8] IMPLICIT INTEGER OPTIONAL,
 *    dataVolume               [9] IMPLICIT INTEGER OPTIONAL,
 *    cAMELInitCFIndicator     [10] IMPLICIT CAMELInitCFIndicator OPTIONAL,
 *    causeForTerm             [11] IMPLICIT CauseForTerm OPTIONAL,
 *    cAMELModification        [12] IMPLICIT ChangedParameters OPTIONAL,
 *    freeFormatData           [13] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    diagnostics              [14] HLRIntResult OPTIONAL,
 *    freeFormatDataAppend     [15] IMPLICIT BOOLEAN OPTIONAL,
 *    freeFormatData-2         [16] IMPLICIT OCTET STRING ( SIZE( 1 .. 160 ) ) OPTIONAL,
 *    freeFormatDataAppend-2   [17] IMPLICIT BOOLEAN OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CAMELInformation {
    /**
     * @summary `cAMELDestinationNumber`.
     * @public
     * @readonly
     */
    readonly cAMELDestinationNumber: OPTIONAL<OCTET_STRING[]>;
    /**
     * @summary `connectedNumber`.
     * @public
     * @readonly
     */
    readonly connectedNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `roamingNumber`.
     * @public
     * @readonly
     */
    readonly roamingNumber: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mscOutgoingTKGP`.
     * @public
     * @readonly
     */
    readonly mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    /**
     * @summary `seizureTime`.
     * @public
     * @readonly
     */
    readonly seizureTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `answerTime`.
     * @public
     * @readonly
     */
    readonly answerTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `releaseTime`.
     * @public
     * @readonly
     */
    readonly releaseTime: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callDuration`.
     * @public
     * @readonly
     */
    readonly callDuration: OPTIONAL<INTEGER>;
    /**
     * @summary `dataVolume`.
     * @public
     * @readonly
     */
    readonly dataVolume: OPTIONAL<INTEGER>;
    /**
     * @summary `cAMELInitCFIndicator`.
     * @public
     * @readonly
     */
    readonly cAMELInitCFIndicator: OPTIONAL<CAMELInitCFIndicator>;
    /**
     * @summary `causeForTerm`.
     * @public
     * @readonly
     */
    readonly causeForTerm: OPTIONAL<CauseForTerm>;
    /**
     * @summary `cAMELModification`.
     * @public
     * @readonly
     */
    readonly cAMELModification: OPTIONAL<ChangedParameters>;
    /**
     * @summary `freeFormatData`.
     * @public
     * @readonly
     */
    readonly freeFormatData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<HLRIntResult>;
    /**
     * @summary `freeFormatDataAppend`.
     * @public
     * @readonly
     */
    readonly freeFormatDataAppend: OPTIONAL<BOOLEAN>;
    /**
     * @summary `freeFormatData_2`.
     * @public
     * @readonly
     */
    readonly freeFormatData_2: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `freeFormatDataAppend_2`.
     * @public
     * @readonly
     */
    readonly freeFormatDataAppend_2: OPTIONAL<BOOLEAN>;

    constructor (
        cAMELDestinationNumber: OPTIONAL<OCTET_STRING[]>,
        connectedNumber: OPTIONAL<OCTET_STRING>,
        roamingNumber: OPTIONAL<OCTET_STRING>,
        mscOutgoingTKGP: OPTIONAL<TrunkGroup>,
        seizureTime: OPTIONAL<OCTET_STRING>,
        answerTime: OPTIONAL<OCTET_STRING>,
        releaseTime: OPTIONAL<OCTET_STRING>,
        callDuration: OPTIONAL<INTEGER>,
        dataVolume: OPTIONAL<INTEGER>,
        cAMELInitCFIndicator: OPTIONAL<CAMELInitCFIndicator>,
        causeForTerm: OPTIONAL<CauseForTerm>,
        cAMELModification: OPTIONAL<ChangedParameters>,
        freeFormatData: OPTIONAL<OCTET_STRING>,
        diagnostics: OPTIONAL<HLRIntResult>,
        freeFormatDataAppend: OPTIONAL<BOOLEAN>,
        freeFormatData_2: OPTIONAL<OCTET_STRING>,
        freeFormatDataAppend_2: OPTIONAL<BOOLEAN>
    ) {
        this.cAMELDestinationNumber = cAMELDestinationNumber;
        this.connectedNumber = connectedNumber;
        this.roamingNumber = roamingNumber;
        this.mscOutgoingTKGP = mscOutgoingTKGP;
        this.seizureTime = seizureTime;
        this.answerTime = answerTime;
        this.releaseTime = releaseTime;
        this.callDuration = callDuration;
        this.dataVolume = dataVolume;
        this.cAMELInitCFIndicator = cAMELInitCFIndicator;
        this.causeForTerm = causeForTerm;
        this.cAMELModification = cAMELModification;
        this.freeFormatData = freeFormatData;
        this.diagnostics = diagnostics;
        this.freeFormatDataAppend = freeFormatDataAppend;
        this.freeFormatData_2 = freeFormatData_2;
        this.freeFormatDataAppend_2 = freeFormatDataAppend_2;
    
        if (this.cAMELDestinationNumber !== undefined && (this.cAMELDestinationNumber.length !== 1)) {
            throw new ASN1SizeError("CAMELInformation.cAMELDestinationNumber violates SIZE constraint");
        }
        if (this.cAMELDestinationNumber !== undefined && this.cAMELDestinationNumber) {
            for (const _item of this.cAMELDestinationNumber) {
                if (_item.length < 1 || _item.length > 41) {
                    throw new ASN1SizeError("CAMELInformation.cAMELDestinationNumber element violates SIZE constraint");
                }
            }
        }
        if (this.roamingNumber !== undefined && (this.roamingNumber.length < 1 || this.roamingNumber.length > 9)) {
            throw new ASN1SizeError("CAMELInformation.roamingNumber violates SIZE constraint");
        }
        if (this.seizureTime !== undefined && (this.seizureTime.length !== 9)) {
            throw new ASN1SizeError("CAMELInformation.seizureTime violates SIZE constraint");
        }
        if (this.answerTime !== undefined && (this.answerTime.length !== 9)) {
            throw new ASN1SizeError("CAMELInformation.answerTime violates SIZE constraint");
        }
        if (this.releaseTime !== undefined && (this.releaseTime.length !== 9)) {
            throw new ASN1SizeError("CAMELInformation.releaseTime violates SIZE constraint");
        }
        if (this.freeFormatData !== undefined && (this.freeFormatData.length < 1 || this.freeFormatData.length > 160)) {
            throw new ASN1SizeError("CAMELInformation.freeFormatData violates SIZE constraint");
        }
        if (this.freeFormatData_2 !== undefined && (this.freeFormatData_2.length < 1 || this.freeFormatData_2.length > 160)) {
            throw new ASN1SizeError("CAMELInformation.freeFormatData_2 violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CAMELInformation
     * @description
     * 
     * This takes an `object` and converts it to a `CAMELInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAMELInformation`.
     * @returns {CAMELInformation}
     */
    public static _from_object (_o: { [_K in keyof (CAMELInformation)]: (CAMELInformation)[_K] }): CAMELInformation {
        return new CAMELInformation(_o.cAMELDestinationNumber, _o.connectedNumber, _o.roamingNumber, _o.mscOutgoingTKGP, _o.seizureTime, _o.answerTime, _o.releaseTime, _o.callDuration, _o.dataVolume, _o.cAMELInitCFIndicator, _o.causeForTerm, _o.cAMELModification, _o.freeFormatData, _o.diagnostics, _o.freeFormatDataAppend, _o.freeFormatData_2, _o.freeFormatDataAppend_2);
    }

        /**
         * @summary The enum used as the type of the component `cAMELInitCFIndicator`
         * @public
         * @static
         */

    public static _enum_for_cAMELInitCFIndicator = _enum_for_CAMELInitCFIndicator;
}

/**
 * @summary The Leading Root Component Types of CAMELInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CAMELInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("cAMELDestinationNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("connectedNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("roamingNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mscOutgoingTKGP", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("seizureTime", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("answerTime", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("releaseTime", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("callDuration", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("dataVolume", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("cAMELInitCFIndicator", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("causeForTerm", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("cAMELModification", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("freeFormatData", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("freeFormatDataAppend", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("freeFormatData-2", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("freeFormatDataAppend-2", true, $.hasTag(_TagClass.context, 17))
];

/**
 * @summary The Trailing Root Component Types of CAMELInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CAMELInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CAMELInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CAMELInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CAMELInformation: $.ASN1Decoder<CAMELInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CAMELInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CAMELInformation (el: _Element): CAMELInformation {
    if (!_cached_decoder_for_CAMELInformation) { _cached_decoder_for_CAMELInformation = function (el: _Element): CAMELInformation {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let cAMELDestinationNumber: OPTIONAL<OCTET_STRING[]>;
    let connectedNumber: OPTIONAL<OCTET_STRING>;
    let roamingNumber: OPTIONAL<OCTET_STRING>;
    let mscOutgoingTKGP: OPTIONAL<TrunkGroup>;
    let seizureTime: OPTIONAL<OCTET_STRING>;
    let answerTime: OPTIONAL<OCTET_STRING>;
    let releaseTime: OPTIONAL<OCTET_STRING>;
    let callDuration: OPTIONAL<INTEGER>;
    let dataVolume: OPTIONAL<INTEGER>;
    let cAMELInitCFIndicator: OPTIONAL<CAMELInitCFIndicator>;
    let causeForTerm: OPTIONAL<CauseForTerm>;
    let cAMELModification: OPTIONAL<ChangedParameters>;
    let freeFormatData: OPTIONAL<OCTET_STRING>;
    let diagnostics: OPTIONAL<HLRIntResult>;
    let freeFormatDataAppend: OPTIONAL<BOOLEAN>;
    let freeFormatData_2: OPTIONAL<OCTET_STRING>;
    let freeFormatDataAppend_2: OPTIONAL<BOOLEAN>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "cAMELDestinationNumber": (_el: _Element): void => { cAMELDestinationNumber = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "connectedNumber": (_el: _Element): void => { connectedNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "roamingNumber": (_el: _Element): void => { roamingNumber = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mscOutgoingTKGP": (_el: _Element): void => { mscOutgoingTKGP = $._decode_explicit<TrunkGroup>(() => _decode_TrunkGroup)(_el); },
        "seizureTime": (_el: _Element): void => { seizureTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "answerTime": (_el: _Element): void => { answerTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseTime": (_el: _Element): void => { releaseTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "callDuration": (_el: _Element): void => { callDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolume": (_el: _Element): void => { dataVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "cAMELInitCFIndicator": (_el: _Element): void => { cAMELInitCFIndicator = $._decode_implicit<CAMELInitCFIndicator>(() => _decode_CAMELInitCFIndicator)(_el); },
        "causeForTerm": (_el: _Element): void => { causeForTerm = $._decode_implicit<CauseForTerm>(() => _decode_CauseForTerm)(_el); },
        "cAMELModification": (_el: _Element): void => { cAMELModification = $._decode_implicit<ChangedParameters>(() => _decode_ChangedParameters)(_el); },
        "freeFormatData": (_el: _Element): void => { freeFormatData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_explicit<HLRIntResult>(() => _decode_HLRIntResult)(_el); },
        "freeFormatDataAppend": (_el: _Element): void => { freeFormatDataAppend = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "freeFormatData-2": (_el: _Element): void => { freeFormatData_2 = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "freeFormatDataAppend-2": (_el: _Element): void => { freeFormatDataAppend_2 = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CAMELInformation,
        _extension_additions_list_spec_for_CAMELInformation,
        _root_component_type_list_2_spec_for_CAMELInformation,
        undefined,
    );
    return new CAMELInformation( /* SET_CONSTRUCTOR_CALL */
        cAMELDestinationNumber,
        connectedNumber,
        roamingNumber,
        mscOutgoingTKGP,
        seizureTime,
        answerTime,
        releaseTime,
        callDuration,
        dataVolume,
        cAMELInitCFIndicator,
        causeForTerm,
        cAMELModification,
        freeFormatData,
        diagnostics,
        freeFormatDataAppend,
        freeFormatData_2,
        freeFormatDataAppend_2
    );
}; }
    return _cached_decoder_for_CAMELInformation(el);
}

let _cached_encoder_for_CAMELInformation: $.ASN1Encoder<CAMELInformation> | null = null;

/**
 * @summary Encodes a(n) CAMELInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAMELInformation, encoded as an ASN.1 Element.
 */
export
function _encode_CAMELInformation (value: CAMELInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CAMELInformation) { _cached_encoder_for_CAMELInformation = function (value: CAMELInformation, _elGetter: $.ASN1Encoder<CAMELInformation>): _Element {
    const _components: _Element[] = [];
    if (value.cAMELDestinationNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.cAMELDestinationNumber, $.BER));
    }
    if (value.connectedNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.connectedNumber, $.BER));
    }
    if (value.roamingNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.roamingNumber, $.BER));
    }
    if (value.mscOutgoingTKGP !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_TrunkGroup, $.BER)(value.mscOutgoingTKGP, $.BER));
    }
    if (value.seizureTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.seizureTime, $.BER));
    }
    if (value.answerTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.answerTime, $.BER));
    }
    if (value.releaseTime !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.releaseTime, $.BER));
    }
    if (value.callDuration !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.callDuration, $.BER));
    }
    if (value.dataVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.dataVolume, $.BER));
    }
    if (value.cAMELInitCFIndicator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_CAMELInitCFIndicator, $.BER)(value.cAMELInitCFIndicator, $.BER));
    }
    if (value.causeForTerm !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_CauseForTerm, $.BER)(value.causeForTerm, $.BER));
    }
    if (value.cAMELModification !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_ChangedParameters, $.BER)(value.cAMELModification, $.BER));
    }
    if (value.freeFormatData !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeOctetString, $.BER)(value.freeFormatData, $.BER));
    }
    if (value.diagnostics !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 14, () => _encode_HLRIntResult, $.BER)(value.diagnostics, $.BER));
    }
    if (value.freeFormatDataAppend !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => $._encodeBoolean, $.BER)(value.freeFormatDataAppend, $.BER));
    }
    if (value.freeFormatData_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => $._encodeOctetString, $.BER)(value.freeFormatData_2, $.BER));
    }
    if (value.freeFormatDataAppend_2 !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => $._encodeBoolean, $.BER)(value.freeFormatDataAppend_2, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CAMELInformation(value, elGetter);
}


/* eslint-enable */
