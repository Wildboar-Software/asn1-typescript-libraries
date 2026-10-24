/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChangeCondition, _decode_ChangeCondition, _encode_ChangeCondition, _enum_for_ChangeCondition } from "../GPRSChargingDataTypes/ChangeCondition.ta.mjs";


/**
 * @summary ChangeOfMBMSCondition
 * @description
 * 
 * Downlink volume container for an MBMS bearer context in an S-MB-CDR,
 * G-MB-CDR, or MBMS-GW-CDR. A container is added on tariff time change and
 * on CDR closure (clauses 5.2.3.7 and 5.2.3.7A). The first container holds
 * the volume since the record was opened; later containers hold the volume
 * since the previous container closed. The list shall include the required
 * bearer capabilities (QoS Negotiated) (tables 6.1.10.1, 6.1.11.1, and
 * 6.1.12.1).
 * 
 * 3GPP TS 32.251 V19.0.0.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangeOfMBMSCondition ::= SEQUENCE {
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
class ChangeOfMBMSCondition {
    /**
     * @summary `qosRequested`.
     * @description
     *
     * QoS captured for this MBMS volume container. The volume list shall
     * include the required bearer capabilities (tables 6.1.10.1, 6.1.11.1, and
     * 6.1.12.1). TS 32.251 does not further define this component.
     *
     * @public
     * @readonly
     */
    readonly qosRequested: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `qosNegotiated`.
     * @description
     *
     * Negotiated QoS, the required MBMS bearer capabilities, included in the
     * volume list (tables 6.1.10.1, 6.1.11.1, and 6.1.12.1).
     *
     * @public
     * @readonly
     */
    readonly qosNegotiated: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `dataVolumeMBMSUplink`.
     * @description
     *
     * Uplink octet count for this MBMS container. Clause 5.2.3.7 describes the
     * MBMS volume list as a downlink count. TS 32.251 does not give a separate
     * uplink rule.
     *
     * @public
     * @readonly
     */
    readonly dataVolumeMBMSUplink: OPTIONAL<INTEGER>;
    /**
     * @summary `dataVolumeMBMSDownlink`.
     * @description
     *
     * Downlink octet count for this MBMS bearer context since the previous
     * container closed, or since the record opened for the first container
     * (clauses 5.2.3.7 and 5.2.3.7A).
     *
     * @public
     * @readonly
     */
    readonly dataVolumeMBMSDownlink: INTEGER;
    /**
     * @summary `changeCondition`.
     * @description
     *
     * Reason this MBMS volume container was closed. The supported addition
     * triggers are tariff time change and CDR closure (tables 5.2.3.7.2.1 and
     * 5.2.3.7A.2.1).
     *
     * @public
     * @readonly
     */
    readonly changeCondition: ChangeCondition;
    /**
     * @summary `changeTime`.
     * @description
     *
     * Time stamp at which this MBMS volume container was closed (clauses
     * 5.2.3.7 and 5.2.3.7A).
     *
     * @public
     * @readonly
     */
    readonly changeTime: OCTET_STRING;
    /**
     * @summary `failureHandlingContinue`.
     * @description
     *
     * TS 32.251 does not define this component for the MBMS volume container.
     * Failure handling in clause 5.3.1.4 applies to the P-GW and the TDF, not
     * to MBMS bearer-context charging.
     *
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
        failureHandlingContinue?: OPTIONAL<BOOLEAN>
    ) {
        this.qosRequested = qosRequested;
        this.qosNegotiated = qosNegotiated;
        this.dataVolumeMBMSUplink = dataVolumeMBMSUplink;
        this.dataVolumeMBMSDownlink = dataVolumeMBMSDownlink;
        this.changeCondition = changeCondition;
        this.changeTime = changeTime;
        this.failureHandlingContinue = failureHandlingContinue;
    
        if (this.qosRequested !== undefined && (this.qosRequested.length < 4 || this.qosRequested.length > 255)) {
            throw new ASN1SizeError("ChangeOfMBMSCondition.qosRequested violates SIZE constraint");
        }
        if (this.qosNegotiated !== undefined && (this.qosNegotiated.length < 4 || this.qosNegotiated.length > 255)) {
            throw new ASN1SizeError("ChangeOfMBMSCondition.qosNegotiated violates SIZE constraint");
        }
        if ((this.changeTime.length !== 9)) {
            throw new ASN1SizeError("ChangeOfMBMSCondition.changeTime violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ChangeOfMBMSCondition
     * @description
     * 
     * This takes an `object` and converts it to a `ChangeOfMBMSCondition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangeOfMBMSCondition`.
     * @returns {ChangeOfMBMSCondition}
     */
    public static _from_object (_o: { [_K in keyof (ChangeOfMBMSCondition)]: (ChangeOfMBMSCondition)[_K] }): ChangeOfMBMSCondition {
        return new ChangeOfMBMSCondition(_o.qosRequested, _o.qosNegotiated, _o.dataVolumeMBMSUplink, _o.dataVolumeMBMSDownlink, _o.changeCondition, _o.changeTime, _o.failureHandlingContinue);
    }

        /**
         * @summary The enum used as the type of the component `changeCondition`
         * @public
         * @static
         */

    public static _enum_for_changeCondition = _enum_for_ChangeCondition;
}

/**
 * @summary The Leading Root Component Types of ChangeOfMBMSCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangeOfMBMSCondition: $.ComponentSpec[] = [
    new $.ComponentSpec("qosRequested", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("qosNegotiated", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dataVolumeMBMSUplink", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dataVolumeMBMSDownlink", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("changeCondition", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("changeTime", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("failureHandlingContinue", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of ChangeOfMBMSCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangeOfMBMSCondition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangeOfMBMSCondition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangeOfMBMSCondition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangeOfMBMSCondition: $.ASN1Decoder<ChangeOfMBMSCondition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangeOfMBMSCondition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangeOfMBMSCondition (el: _Element): ChangeOfMBMSCondition {
    if (!_cached_decoder_for_ChangeOfMBMSCondition) { _cached_decoder_for_ChangeOfMBMSCondition = function (el: _Element): ChangeOfMBMSCondition {
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
        _root_component_type_list_1_spec_for_ChangeOfMBMSCondition,
        _extension_additions_list_spec_for_ChangeOfMBMSCondition,
        _root_component_type_list_2_spec_for_ChangeOfMBMSCondition,
        undefined,
    );
    return new ChangeOfMBMSCondition(
        qosRequested,
        qosNegotiated,
        dataVolumeMBMSUplink,
        dataVolumeMBMSDownlink,
        changeCondition,
        changeTime,
        failureHandlingContinue
    );
}; }
    return _cached_decoder_for_ChangeOfMBMSCondition(el);
}

let _cached_encoder_for_ChangeOfMBMSCondition: $.ASN1Encoder<ChangeOfMBMSCondition> | null = null;

/**
 * @summary Encodes a(n) ChangeOfMBMSCondition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangeOfMBMSCondition, encoded as an ASN.1 Element.
 */
export
function _encode_ChangeOfMBMSCondition (value: ChangeOfMBMSCondition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangeOfMBMSCondition) { _cached_encoder_for_ChangeOfMBMSCondition = function (value: ChangeOfMBMSCondition, _elGetter: $.ASN1Encoder<ChangeOfMBMSCondition>): _Element {
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
    return _cached_encoder_for_ChangeOfMBMSCondition(value, elGetter);
}


/* eslint-enable */
