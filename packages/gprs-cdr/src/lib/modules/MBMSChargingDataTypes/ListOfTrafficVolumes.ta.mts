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
import { ChangeCondition, _decode_ChangeCondition, _encode_ChangeCondition, _enum_for_ChangeCondition } from "../MBMSChargingDataTypes/ChangeCondition.ta.mjs";
// export { ChangeCondition, _enum_for_ChangeCondition, ChangeCondition_qoSChange /* IMPORTED_LONG_ENUMERATION_ITEM */, qoSChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_tariffTime /* IMPORTED_LONG_ENUMERATION_ITEM */, tariffTime /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_recordClosure /* IMPORTED_LONG_ENUMERATION_ITEM */, recordClosure /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_cGI_SAICHange /* IMPORTED_LONG_ENUMERATION_ITEM */, cGI_SAICHange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_rAIChange /* IMPORTED_LONG_ENUMERATION_ITEM */, rAIChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_dT_Establishment /* IMPORTED_LONG_ENUMERATION_ITEM */, dT_Establishment /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_dT_Removal /* IMPORTED_LONG_ENUMERATION_ITEM */, dT_Removal /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_eCGIChange /* IMPORTED_LONG_ENUMERATION_ITEM */, eCGIChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_tAIChange /* IMPORTED_LONG_ENUMERATION_ITEM */, tAIChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_userLocationChange /* IMPORTED_LONG_ENUMERATION_ITEM */, userLocationChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_userCSGInformationChange /* IMPORTED_LONG_ENUMERATION_ITEM */, userCSGInformationChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_presenceInPRAChange /* IMPORTED_LONG_ENUMERATION_ITEM */, presenceInPRAChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_removalOfAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, removalOfAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_unusabilityOfAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, unusabilityOfAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_indirectChangeCondition /* IMPORTED_LONG_ENUMERATION_ITEM */, indirectChangeCondition /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_userPlaneToUEChange /* IMPORTED_LONG_ENUMERATION_ITEM */, userPlaneToUEChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_servingPLMNRateControlChange /* IMPORTED_LONG_ENUMERATION_ITEM */, servingPLMNRateControlChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_threeGPPPSDataOffStatusChange /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPPSDataOffStatusChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChangeCondition_aPNRateControlChange /* IMPORTED_LONG_ENUMERATION_ITEM */, aPNRateControlChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChangeCondition, _encode_ChangeCondition } from "../MBMSChargingDataTypes/ChangeCondition.ta.mjs";


/**
 * @summary ListOfTrafficVolumes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListOfTrafficVolumes ::= SEQUENCE {
 *    qosRequested              [1] IMPLICIT OCTET STRING ( SIZE( 4 .. 255 ) ) OPTIONAL,
 *    qosNegotiated             [2] IMPLICIT OCTET STRING ( SIZE( 4 .. 255 ) ) OPTIONAL,
 *    dataVolumeMBMSUplink      [3] IMPLICIT INTEGER OPTIONAL,
 *    dataVolumeMBMSDownlink    [4] IMPLICIT INTEGER,
 *    changeCondition           [5] IMPLICIT ChangeCondition,
 *    changeTime                [6] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    failureHandlingContinue   [7] IMPLICIT BOOLEAN OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ListOfTrafficVolumes {
    /**
     * @summary `qosRequested`.
     * @public
     * @readonly
     */
    readonly qosRequested: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `qosNegotiated`.
     * @public
     * @readonly
     */
    readonly qosNegotiated: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `dataVolumeMBMSUplink`.
     * @public
     * @readonly
     */
    readonly dataVolumeMBMSUplink: OPTIONAL<INTEGER>;
    /**
     * @summary `dataVolumeMBMSDownlink`.
     * @public
     * @readonly
     */
    readonly dataVolumeMBMSDownlink: INTEGER;
    /**
     * @summary `changeCondition`.
     * @public
     * @readonly
     */
    readonly changeCondition: ChangeCondition;
    /**
     * @summary `changeTime`.
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;
    /**
     * @summary `failureHandlingContinue`.
     * @public
     * @readonly
     */
    readonly failureHandlingContinue: OPTIONAL<BOOLEAN>;

    constructor (
        qosRequested: OPTIONAL<OCTET_STRING>,
        qosNegotiated: OPTIONAL<OCTET_STRING>,
        dataVolumeMBMSUplink: OPTIONAL<INTEGER>,
        dataVolumeMBMSDownlink: INTEGER,
        changeCondition: ChangeCondition,
        changeTime: OCTET_STRING,
        failureHandlingContinue: OPTIONAL<BOOLEAN>
    ) {
        this.qosRequested = qosRequested;
        this.qosNegotiated = qosNegotiated;
        this.dataVolumeMBMSUplink = dataVolumeMBMSUplink;
        this.dataVolumeMBMSDownlink = dataVolumeMBMSDownlink;
        this.changeCondition = changeCondition;
        this.changeTime = changeTime;
        this.failureHandlingContinue = failureHandlingContinue;
    
        if (this.qosRequested !== undefined && (this.qosRequested.length < 4 || this.qosRequested.length > 255)) {
            throw new ASN1SizeError("ListOfTrafficVolumes.qosRequested violates SIZE constraint");
        }
        if (this.qosNegotiated !== undefined && (this.qosNegotiated.length < 4 || this.qosNegotiated.length > 255)) {
            throw new ASN1SizeError("ListOfTrafficVolumes.qosNegotiated violates SIZE constraint");
        }
        if ((this.changeTime.length !== 9)) {
            throw new ASN1SizeError("ListOfTrafficVolumes.changeTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ListOfTrafficVolumes
     * @description
     * 
     * This takes an `object` and converts it to a `ListOfTrafficVolumes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ListOfTrafficVolumes`.
     * @returns {ListOfTrafficVolumes}
     */
    public static _from_object (_o: { [_K in keyof (ListOfTrafficVolumes)]: (ListOfTrafficVolumes)[_K] }): ListOfTrafficVolumes {
        return new ListOfTrafficVolumes(_o.qosRequested, _o.qosNegotiated, _o.dataVolumeMBMSUplink, _o.dataVolumeMBMSDownlink, _o.changeCondition, _o.changeTime, _o.failureHandlingContinue);
    }

        /**
         * @summary The enum used as the type of the component `changeCondition`
         * @public
         * @static
         */

    public static _enum_for_changeCondition = _enum_for_ChangeCondition;
}

/**
 * @summary The Leading Root Component Types of ListOfTrafficVolumes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ListOfTrafficVolumes: $.ComponentSpec[] = [
    new $.ComponentSpec("qosRequested", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("qosNegotiated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dataVolumeMBMSUplink", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dataVolumeMBMSDownlink", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("changeCondition", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("failureHandlingContinue", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of ListOfTrafficVolumes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ListOfTrafficVolumes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ListOfTrafficVolumes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ListOfTrafficVolumes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ListOfTrafficVolumes: $.ASN1Decoder<ListOfTrafficVolumes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListOfTrafficVolumes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListOfTrafficVolumes (el: _Element): ListOfTrafficVolumes {
    if (!_cached_decoder_for_ListOfTrafficVolumes) { _cached_decoder_for_ListOfTrafficVolumes = function (el: _Element): ListOfTrafficVolumes {
    let qosRequested: OPTIONAL<OCTET_STRING>;
    let qosNegotiated: OPTIONAL<OCTET_STRING>;
    let dataVolumeMBMSUplink: OPTIONAL<INTEGER>;
    let dataVolumeMBMSDownlink!: INTEGER;
    let changeCondition!: ChangeCondition;
    let changeTime!: OCTET_STRING;
    let failureHandlingContinue: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "qosRequested": (_el: _Element): void => { qosRequested = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "qosNegotiated": (_el: _Element): void => { qosNegotiated = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "dataVolumeMBMSUplink": (_el: _Element): void => { dataVolumeMBMSUplink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolumeMBMSDownlink": (_el: _Element): void => { dataVolumeMBMSDownlink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "changeCondition": (_el: _Element): void => { changeCondition = $._decode_implicit<ChangeCondition>(() => _decode_ChangeCondition)(_el); },
        "changeTime": (_el: _Element): void => { changeTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "failureHandlingContinue": (_el: _Element): void => { failureHandlingContinue = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ListOfTrafficVolumes,
        _extension_additions_list_spec_for_ListOfTrafficVolumes,
        _root_component_type_list_2_spec_for_ListOfTrafficVolumes,
        undefined,
    );
    return new ListOfTrafficVolumes(
        qosRequested,
        qosNegotiated,
        dataVolumeMBMSUplink,
        dataVolumeMBMSDownlink,
        changeCondition,
        changeTime,
        failureHandlingContinue
    );
}; }
    return _cached_decoder_for_ListOfTrafficVolumes(el);
}

let _cached_encoder_for_ListOfTrafficVolumes: $.ASN1Encoder<ListOfTrafficVolumes> | null = null;

/**
 * @summary Encodes a(n) ListOfTrafficVolumes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListOfTrafficVolumes, encoded as an ASN.1 Element.
 */
export
function _encode_ListOfTrafficVolumes (value: ListOfTrafficVolumes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListOfTrafficVolumes) { _cached_encoder_for_ListOfTrafficVolumes = function (value: ListOfTrafficVolumes, _elGetter: $.ASN1Encoder<ListOfTrafficVolumes>): _Element {
    const _components: _Element[] = [];
    if (value.qosRequested !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.qosRequested, $.BER));
    }
    if (value.qosNegotiated !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.qosNegotiated, $.BER));
    }
    if (value.dataVolumeMBMSUplink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.dataVolumeMBMSUplink, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.dataVolumeMBMSDownlink, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_ChangeCondition, $.BER)(value.changeCondition, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.changeTime, $.BER));
    if (value.failureHandlingContinue !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.failureHandlingContinue, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ListOfTrafficVolumes(value, elGetter);
}


/* eslint-enable */
