/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_NIDDsubmission_serviceChangeCondition, _encode_NIDDsubmission_serviceChangeCondition, NIDDsubmission_serviceChangeCondition } from "../CPDTChargingDataTypes/NIDDsubmission-serviceChangeCondition.ta.mjs";


/**
 * @summary NIDDsubmission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NIDDsubmission ::= SEQUENCE {
 *    submissionTimestamp      [0] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL, 
 *    eventTimestamp           [1] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL, 
 *    dataVolumeGPRSUplink     [2] IMPLICIT INTEGER OPTIONAL, 
 *    dataVolumeGPRSDownlink   [3] IMPLICIT INTEGER OPTIONAL, 
 *    submissionResultCode     [4] IMPLICIT INTEGER OPTIONAL, 
 *    serviceChangeCondition   [5] IMPLICIT BIT STRING {
 *       nIDDsubmissionResponseReceipt  (0 ), 
 *       nIDDsubmissionResponseSending  (1 ), 
 *       nIDDdeliveryToUE  (2 ), 
 *       nIDDdeliveryFromUEerror  (3 ), 
 *       nIDDsubmissionTimeout  (4 )} OPTIONAL}
 * ```
 * 
 * @class
 */
export
class NIDDsubmission {
    /**
     * @summary `submissionTimestamp`.
     * @public
     * @readonly
     */
    readonly submissionTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `eventTimestamp`.
     * @public
     * @readonly
     */
    readonly eventTimestamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `dataVolumeGPRSUplink`.
     * @public
     * @readonly
     */
    readonly dataVolumeGPRSUplink: OPTIONAL<INTEGER>;
    /**
     * @summary `dataVolumeGPRSDownlink`.
     * @public
     * @readonly
     */
    readonly dataVolumeGPRSDownlink: OPTIONAL<INTEGER>;
    /**
     * @summary `submissionResultCode`.
     * @public
     * @readonly
     */
    readonly submissionResultCode: OPTIONAL<INTEGER>;
    /**
     * @summary `serviceChangeCondition`.
     * @public
     * @readonly
     */
    readonly serviceChangeCondition: OPTIONAL<NIDDsubmission_serviceChangeCondition>;

    constructor (
        submissionTimestamp: OPTIONAL<OCTET_STRING>,
        eventTimestamp: OPTIONAL<OCTET_STRING>,
        dataVolumeGPRSUplink: OPTIONAL<INTEGER>,
        dataVolumeGPRSDownlink: OPTIONAL<INTEGER>,
        submissionResultCode: OPTIONAL<INTEGER>,
        serviceChangeCondition: OPTIONAL<NIDDsubmission_serviceChangeCondition>
    ) {
        this.submissionTimestamp = submissionTimestamp;
        this.eventTimestamp = eventTimestamp;
        this.dataVolumeGPRSUplink = dataVolumeGPRSUplink;
        this.dataVolumeGPRSDownlink = dataVolumeGPRSDownlink;
        this.submissionResultCode = submissionResultCode;
        this.serviceChangeCondition = serviceChangeCondition;
    
        if (this.submissionTimestamp !== undefined && (this.submissionTimestamp.length !== 9)) {
            throw new ASN1SizeError("NIDDsubmission.submissionTimestamp violates SIZE constraint");
        }
        if (this.eventTimestamp !== undefined && (this.eventTimestamp.length !== 9)) {
            throw new ASN1SizeError("NIDDsubmission.eventTimestamp violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a NIDDsubmission
     * @description
     * 
     * This takes an `object` and converts it to a `NIDDsubmission`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NIDDsubmission`.
     * @returns {NIDDsubmission}
     */
    public static _from_object (_o: { [_K in keyof (NIDDsubmission)]: (NIDDsubmission)[_K] }): NIDDsubmission {
        return new NIDDsubmission(_o.submissionTimestamp, _o.eventTimestamp, _o.dataVolumeGPRSUplink, _o.dataVolumeGPRSDownlink, _o.submissionResultCode, _o.serviceChangeCondition);
    }


}

/**
 * @summary The Leading Root Component Types of NIDDsubmission
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NIDDsubmission: $.ComponentSpec[] = [
    new $.ComponentSpec("submissionTimestamp", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventTimestamp", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dataVolumeGPRSUplink", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("dataVolumeGPRSDownlink", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("submissionResultCode", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceChangeCondition", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of NIDDsubmission
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NIDDsubmission: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NIDDsubmission
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NIDDsubmission: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NIDDsubmission: $.ASN1Decoder<NIDDsubmission> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NIDDsubmission
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NIDDsubmission (el: _Element): NIDDsubmission {
    if (!_cached_decoder_for_NIDDsubmission) { _cached_decoder_for_NIDDsubmission = function (el: _Element): NIDDsubmission {
    let submissionTimestamp: OPTIONAL<OCTET_STRING>;
    let eventTimestamp: OPTIONAL<OCTET_STRING>;
    let dataVolumeGPRSUplink: OPTIONAL<INTEGER>;
    let dataVolumeGPRSDownlink: OPTIONAL<INTEGER>;
    let submissionResultCode: OPTIONAL<INTEGER>;
    let serviceChangeCondition: OPTIONAL<NIDDsubmission_serviceChangeCondition>;
    const callbacks: $.DecodingMap = {
        "submissionTimestamp": (_el: _Element): void => { submissionTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "eventTimestamp": (_el: _Element): void => { eventTimestamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "dataVolumeGPRSUplink": (_el: _Element): void => { dataVolumeGPRSUplink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolumeGPRSDownlink": (_el: _Element): void => { dataVolumeGPRSDownlink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "submissionResultCode": (_el: _Element): void => { submissionResultCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceChangeCondition": (_el: _Element): void => { serviceChangeCondition = $._decode_implicit<NIDDsubmission_serviceChangeCondition>(() => _decode_NIDDsubmission_serviceChangeCondition)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NIDDsubmission,
        _extension_additions_list_spec_for_NIDDsubmission,
        _root_component_type_list_2_spec_for_NIDDsubmission,
        undefined,
    );
    return new NIDDsubmission(
        submissionTimestamp,
        eventTimestamp,
        dataVolumeGPRSUplink,
        dataVolumeGPRSDownlink,
        submissionResultCode,
        serviceChangeCondition
    );
}; }
    return _cached_decoder_for_NIDDsubmission(el);
}

let _cached_encoder_for_NIDDsubmission: $.ASN1Encoder<NIDDsubmission> | null = null;

/**
 * @summary Encodes a(n) NIDDsubmission into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NIDDsubmission, encoded as an ASN.1 Element.
 */
export
function _encode_NIDDsubmission (value: NIDDsubmission, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NIDDsubmission) { _cached_encoder_for_NIDDsubmission = function (value: NIDDsubmission, _elGetter: $.ASN1Encoder<NIDDsubmission>): _Element {
    const _components: _Element[] = [];
    if (value.submissionTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.submissionTimestamp, $.BER));
    }
    if (value.eventTimestamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.eventTimestamp, $.BER));
    }
    if (value.dataVolumeGPRSUplink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.dataVolumeGPRSUplink, $.BER));
    }
    if (value.dataVolumeGPRSDownlink !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.dataVolumeGPRSDownlink, $.BER));
    }
    if (value.submissionResultCode !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.submissionResultCode, $.BER));
    }
    if (value.serviceChangeCondition !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_NIDDsubmission_serviceChangeCondition, $.BER)(value.serviceChangeCondition, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NIDDsubmission(value, elGetter);
}


/* eslint-enable */
