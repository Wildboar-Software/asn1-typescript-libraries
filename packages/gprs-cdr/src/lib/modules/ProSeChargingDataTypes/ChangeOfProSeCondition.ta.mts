/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CoverageStatus, _encode_CoverageStatus, _enum_for_CoverageStatus, CoverageStatus } from "../ProSeChargingDataTypes/CoverageStatus.ta.mjs";
import { _decode_ChangeOfProSeCondition_serviceChangeCondition, _encode_ChangeOfProSeCondition_serviceChangeCondition, type ChangeOfProSeCondition_serviceChangeCondition } from "../ProSeChargingDataTypes/ChangeOfProSeCondition-serviceChangeCondition.ta.mjs";
import { _decode_ChangeOfProSeCondition_radioResourcesInd, _encode_ChangeOfProSeCondition_radioResourcesInd, type ChangeOfProSeCondition_radioResourcesInd } from "../ProSeChargingDataTypes/ChangeOfProSeCondition-radioResourcesInd.ta.mjs";


/**
 * @summary ChangeOfProSeCondition
 * @description
 *
 * One closed transmission or reception container in a PF-DC-CDR. The ProSe
 * Function adds a container when a charging condition changes and the UE
 * included that information in the usage information report. Examples of a
 * change are a new cell, leaving E-UTRAN coverage, and returning to coverage.
 * The condition categorizes the volume, for example volume per coverage-status
 * period.
 *
 * `dataVolume` is transmitted volume when the container is in
 * `listOfTransmissionData`, and received volume when it is in
 * `listOfReceptionData`.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.3.1.2 and 6.1.3.4. Table 6.1.3.4.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeOfProSeCondition ::= SEQUENCE {
 *    changeConditionTimestamp               [0] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    coverageStatus                         [1] IMPLICIT CoverageStatus OPTIONAL,
 *    uELocation                             [2] IMPLICIT OCTET STRING OPTIONAL,
 *    dataVolume                             [3] IMPLICIT INTEGER OPTIONAL,
 *    serviceChangeCondition                 [4] IMPLICIT BIT STRING {
 *       pLMNchange  (0 ),
 *       coverageStatusChange  (1 ),
 *       locationChange  (2 )} OPTIONAL,
 *    localSequenceNumber                    [5] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL,
 *    usageInformationReportSequenceNumber   [6] IMPLICIT INTEGER OPTIONAL,
 *    radioResourcesInd                      [7] IMPLICIT INTEGER {
 *       operatorProvided    ( 1 ),
 *       configured          ( 2 )} OPTIONAL,
 *    radiofrequency                         [8] IMPLICIT OCTET STRING OPTIONAL,
 *    vPLMNIdentifier                        [9] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChangeOfProSeCondition {
    /**
     * @summary `changeConditionTimestamp`.
     * @description
     *
     * Category Oc. Time the container was closed and reported because a ProSe
     * charging condition changed.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.2.
     *
     * @public
     * @readonly
     */
    readonly changeConditionTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `coverageStatus`.
     * @description
     *
     * Category Oc. Whether the UE is served by E-UTRAN for the volume in this
     * container: in coverage or out of coverage.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.2.
     *
     * @public
     * @readonly
     */
    readonly coverageStatus: OPTIONAL<CoverageStatus>;
    /**
     * @summary `uELocation`.
     * @description
     *
     * Category Oc. Location of the UE when the container was closed, for
     * example the ECGI.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.40 sets UE Location to the 28-bit
     * cell identity of the ECGI, taken from the UE's lower layers.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.2.
     *
     * @public
     * @readonly
     */
    readonly uELocation: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `dataVolume`.
     * @description
     *
     * Category Oc. Amount of data the UE transmitted, when this container is in
     * `listOfTransmissionData`. Amount of data the UE received, when it is in
     * `listOfReceptionData`. Clause 5.1.2.4 also has the UE collect data
     * relayed by a ProSe UE-to-Network Relay; table 6.1.3.4.2 gives that volume
     * no separate field.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.4 and table 6.1.3.4.2.
     *
     * @public
     * @readonly
     */
    readonly dataVolume: OPTIONAL<INTEGER>;
    /**
     * @summary `serviceChangeCondition`.
     * @description
     *
     * Category Oc. ProSe-specific reason the container was closed. Table
     * 6.1.3.4.2 gives a cell change, going out of coverage, and coming back to
     * coverage as examples.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.2.
     *
     * @public
     * @readonly
     */
    readonly serviceChangeCondition: OPTIONAL<ChangeOfProSeCondition_serviceChangeCondition>;
    /**
     * @summary `localSequenceNumber`.
     * @description
     *
     * Category Oc. Sequence number of this Direct Communication data container.
     * It increases by 1 each time a container is closed.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.2.
     *
     * @public
     * @readonly
     */
    readonly localSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `usageInformationReportSequenceNumber`.
     * @description
     *
     * Category Oc. Sequence number of the usage information report that
     * generated this container. The UE puts a sequence number on the report for
     * every collection period.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3 and table 6.1.3.4.2.
     *
     * @public
     * @readonly
     */
    readonly usageInformationReportSequenceNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `radioResourcesInd`.
     * @description
     *
     * Category Oc. Whether this direct communication used operator-provided
     * radio resources or configured radio resources. Clause 5.1.2.3 describes
     * operator-provided resources as those used in E-UTRAN coverage.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3 and table 6.1.3.4.2.
     *
     * @public
     * @readonly
     */
    readonly radioResourcesInd: OPTIONAL<ChangeOfProSeCondition_radioResourcesInd>;
    /**
     * @summary `radiofrequency`.
     * @description
     *
     * Category Oc. Radio frequency used for this ProSe direct communication. TS
     * 32.277 does not define the octet-string layout.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.2.
     *
     * @public
     * @readonly
     */
    readonly radiofrequency: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `vPLMNIdentifier`.
     * @description
     *
     * Category Oc. Identifier of the PLMN the UE is visiting.
     *
     * 3GPP TS 32.277 V19.2.0 table 6.1.3.4.2.
     *
     * @public
     * @readonly
     */
    readonly vPLMNIdentifier: OPTIONAL<OCTET_STRING>;

    constructor (
        changeConditionTimestamp?: OPTIONAL<OCTET_STRING>,
        coverageStatus?: OPTIONAL<CoverageStatus>,
        uELocation?: OPTIONAL<OCTET_STRING>,
        dataVolume?: OPTIONAL<INTEGER>,
        serviceChangeCondition?: OPTIONAL<ChangeOfProSeCondition_serviceChangeCondition>,
        localSequenceNumber?: OPTIONAL<INTEGER>,
        usageInformationReportSequenceNumber?: OPTIONAL<INTEGER>,
        radioResourcesInd?: OPTIONAL<ChangeOfProSeCondition_radioResourcesInd>,
        radiofrequency?: OPTIONAL<OCTET_STRING>,
        vPLMNIdentifier?: OPTIONAL<OCTET_STRING>
    ) {
        this.changeConditionTimestamp = changeConditionTimestamp;
        this.coverageStatus = coverageStatus;
        this.uELocation = uELocation;
        this.dataVolume = dataVolume;
        this.serviceChangeCondition = serviceChangeCondition;
        this.localSequenceNumber = localSequenceNumber;
        this.usageInformationReportSequenceNumber = usageInformationReportSequenceNumber;
        this.radioResourcesInd = radioResourcesInd;
        this.radiofrequency = radiofrequency;
        this.vPLMNIdentifier = vPLMNIdentifier;
    
        if (this.changeConditionTimestamp !== undefined && (this.changeConditionTimestamp.length !== 9)) {
            throw new ASN1SizeError("ChangeOfProSeCondition.changeConditionTimestamp violates SIZE constraint");
        }
        if (this.localSequenceNumber !== undefined && (this.localSequenceNumber < 0 || this.localSequenceNumber > 4294967295)) {
            throw new ASN1OverflowError("ChangeOfProSeCondition.localSequenceNumber violates INTEGER range");
        }
        if (this.vPLMNIdentifier !== undefined && (this.vPLMNIdentifier.length !== 3)) {
            throw new ASN1SizeError("ChangeOfProSeCondition.vPLMNIdentifier violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ChangeOfProSeCondition
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeOfProSeCondition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeOfProSeCondition`.
     * @returns {ChangeOfProSeCondition}
     */
    public static _from_object (_o: { [_K in keyof (ChangeOfProSeCondition)]: (ChangeOfProSeCondition)[_K] }): ChangeOfProSeCondition {
        return new ChangeOfProSeCondition(_o.changeConditionTimestamp, _o.coverageStatus, _o.uELocation, _o.dataVolume, _o.serviceChangeCondition, _o.localSequenceNumber, _o.usageInformationReportSequenceNumber, _o.radioResourcesInd, _o.radiofrequency, _o.vPLMNIdentifier);
    }

        /**
         * @summary The enum used as the type of the component `coverageStatus`
         * @public
         * @static
         */

    public static _enum_for_coverageStatus = _enum_for_CoverageStatus;
}

/**
 * @summary The Leading Root Component Types of ChangeOfProSeCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeOfProSeCondition: $.ComponentSpec[] = [
    new $.ComponentSpec("changeConditionTimestamp", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("coverageStatus", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uELocation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dataVolume", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("serviceChangeCondition", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("localSequenceNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("usageInformationReportSequenceNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("radioResourcesInd", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("radiofrequency", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("vPLMNIdentifier", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of ChangeOfProSeCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeOfProSeCondition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeOfProSeCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeOfProSeCondition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeOfProSeCondition: $.ASN1Decoder<ChangeOfProSeCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeOfProSeCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeOfProSeCondition (el: _Element): ChangeOfProSeCondition {
    if (!_cached_decoder_for_ChangeOfProSeCondition) { _cached_decoder_for_ChangeOfProSeCondition = function (el: _Element): ChangeOfProSeCondition {
    let changeConditionTimestamp: OPTIONAL<OCTET_STRING>;
    let coverageStatus: OPTIONAL<CoverageStatus>;
    let uELocation: OPTIONAL<OCTET_STRING>;
    let dataVolume: OPTIONAL<INTEGER>;
    let serviceChangeCondition: OPTIONAL<ChangeOfProSeCondition_serviceChangeCondition>;
    let localSequenceNumber: OPTIONAL<INTEGER>;
    let usageInformationReportSequenceNumber: OPTIONAL<INTEGER>;
    let radioResourcesInd: OPTIONAL<ChangeOfProSeCondition_radioResourcesInd>;
    let radiofrequency: OPTIONAL<OCTET_STRING>;
    let vPLMNIdentifier: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "changeConditionTimestamp": (_el: _Element): void => { changeConditionTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "coverageStatus": (_el: _Element): void => { coverageStatus = $._decode_implicit<CoverageStatus>(() => _decode_CoverageStatus)(_el); },
        "uELocation": (_el: _Element): void => { uELocation = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "dataVolume": (_el: _Element): void => { dataVolume = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceChangeCondition": (_el: _Element): void => { serviceChangeCondition = $._decode_implicit<ChangeOfProSeCondition_serviceChangeCondition>(() => _decode_ChangeOfProSeCondition_serviceChangeCondition)(_el); },
        "localSequenceNumber": (_el: _Element): void => { localSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "usageInformationReportSequenceNumber": (_el: _Element): void => { usageInformationReportSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "radioResourcesInd": (_el: _Element): void => { radioResourcesInd = $._decode_implicit<ChangeOfProSeCondition_radioResourcesInd>(() => _decode_ChangeOfProSeCondition_radioResourcesInd)(_el); },
        "radiofrequency": (_el: _Element): void => { radiofrequency = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "vPLMNIdentifier": (_el: _Element): void => { vPLMNIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeOfProSeCondition,
        _extension_additions_list_spec_for_ChangeOfProSeCondition,
        _root_component_type_list_2_spec_for_ChangeOfProSeCondition,
        undefined,
    );
    return new ChangeOfProSeCondition(
        changeConditionTimestamp,
        coverageStatus,
        uELocation,
        dataVolume,
        serviceChangeCondition,
        localSequenceNumber,
        usageInformationReportSequenceNumber,
        radioResourcesInd,
        radiofrequency,
        vPLMNIdentifier
    );
}; }
    return _cached_decoder_for_ChangeOfProSeCondition(el);
}

let _cached_encoder_for_ChangeOfProSeCondition: $.ASN1Encoder<ChangeOfProSeCondition> | null = null;

/**
 * @summary Encodes a(n) ChangeOfProSeCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeOfProSeCondition, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeOfProSeCondition (value: ChangeOfProSeCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeOfProSeCondition) { _cached_encoder_for_ChangeOfProSeCondition = function (value: ChangeOfProSeCondition, _elGetter: $.ASN1Encoder<ChangeOfProSeCondition>): _Element {
    const _components: _Element[] = [];
    if (value.changeConditionTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.changeConditionTimestamp, $.BER));
    }
    if (value.coverageStatus !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CoverageStatus, $.BER)(value.coverageStatus, $.BER));
    }
    if (value.uELocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.uELocation, $.BER));
    }
    if (value.dataVolume !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.dataVolume, $.BER));
    }
    if (value.serviceChangeCondition !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_ChangeOfProSeCondition_serviceChangeCondition, $.BER)(value.serviceChangeCondition, $.BER));
    }
    if (value.localSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.localSequenceNumber, $.BER));
    }
    if (value.usageInformationReportSequenceNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.usageInformationReportSequenceNumber, $.BER));
    }
    if (value.radioResourcesInd !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ChangeOfProSeCondition_radioResourcesInd, $.BER)(value.radioResourcesInd, $.BER));
    }
    if (value.radiofrequency !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.radiofrequency, $.BER));
    }
    if (value.vPLMNIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.vPLMNIdentifier, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChangeOfProSeCondition(value, elGetter);
}


/* eslint-enable */
