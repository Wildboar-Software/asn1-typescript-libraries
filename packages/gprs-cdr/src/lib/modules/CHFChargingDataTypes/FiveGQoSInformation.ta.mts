/* eslint-disable */
import {
    type BOOLEAN,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AllocationRetentionPriority, _decode_AllocationRetentionPriority, _encode_AllocationRetentionPriority } from "../CHFChargingDataTypes/AllocationRetentionPriority.ta.mjs";


/**
 * @summary FiveGQoSInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGQoSInformation ::= SEQUENCE {
 *    fiveQi                   [1] IMPLICIT INTEGER,
 *    aRP                      [2] IMPLICIT AllocationRetentionPriority,
 *    qoSNotificationControl   [3] IMPLICIT BOOLEAN OPTIONAL,
 *    reflectiveQos            [4] IMPLICIT BOOLEAN OPTIONAL,
 *    maxbitrateUL             [5] IMPLICIT OCTET STRING OPTIONAL,
 *    maxbitrateDL             [6] IMPLICIT OCTET STRING OPTIONAL,
 *    guaranteedbitrateUL      [7] IMPLICIT OCTET STRING OPTIONAL,
 *    guaranteedbitrateDL      [8] IMPLICIT OCTET STRING OPTIONAL,
 *    priorityLevel            [9] IMPLICIT INTEGER OPTIONAL,
 *    averWindow               [10] IMPLICIT INTEGER OPTIONAL,
 *    maxDataBurstVol          [11] IMPLICIT INTEGER OPTIONAL,
 *    maxPacketLossRateDL      [12] IMPLICIT INTEGER OPTIONAL,
 *    maxPacketLossRateUL      [13] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class FiveGQoSInformation {
    /**
     * @summary `fiveQi`.
     * @public
     * @readonly
     */
    readonly fiveQi: INTEGER;
    /**
     * @summary `aRP`.
     * @public
     * @readonly
     */
    readonly aRP: AllocationRetentionPriority;
    /**
     * @summary `qoSNotificationControl`.
     * @public
     * @readonly
     */
    readonly qoSNotificationControl: OPTIONAL<BOOLEAN>;
    /**
     * @summary `reflectiveQos`.
     * @public
     * @readonly
     */
    readonly reflectiveQos: OPTIONAL<BOOLEAN>;
    /**
     * @summary `maxbitrateUL`.
     * @public
     * @readonly
     */
    readonly maxbitrateUL: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `maxbitrateDL`.
     * @public
     * @readonly
     */
    readonly maxbitrateDL: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `guaranteedbitrateUL`.
     * @public
     * @readonly
     */
    readonly guaranteedbitrateUL: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `guaranteedbitrateDL`.
     * @public
     * @readonly
     */
    readonly guaranteedbitrateDL: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `priorityLevel`.
     * @public
     * @readonly
     */
    readonly priorityLevel: OPTIONAL<INTEGER>;
    /**
     * @summary `averWindow`.
     * @public
     * @readonly
     */
    readonly averWindow: OPTIONAL<INTEGER>;
    /**
     * @summary `maxDataBurstVol`.
     * @public
     * @readonly
     */
    readonly maxDataBurstVol: OPTIONAL<INTEGER>;
    /**
     * @summary `maxPacketLossRateDL`.
     * @public
     * @readonly
     */
    readonly maxPacketLossRateDL: OPTIONAL<INTEGER>;
    /**
     * @summary `maxPacketLossRateUL`.
     * @public
     * @readonly
     */
    readonly maxPacketLossRateUL: OPTIONAL<INTEGER>;

    constructor (
        fiveQi: INTEGER,
        aRP: AllocationRetentionPriority,
        qoSNotificationControl?: OPTIONAL<BOOLEAN>,
        reflectiveQos?: OPTIONAL<BOOLEAN>,
        maxbitrateUL?: OPTIONAL<OCTET_STRING>,
        maxbitrateDL?: OPTIONAL<OCTET_STRING>,
        guaranteedbitrateUL?: OPTIONAL<OCTET_STRING>,
        guaranteedbitrateDL?: OPTIONAL<OCTET_STRING>,
        priorityLevel?: OPTIONAL<INTEGER>,
        averWindow?: OPTIONAL<INTEGER>,
        maxDataBurstVol?: OPTIONAL<INTEGER>,
        maxPacketLossRateDL?: OPTIONAL<INTEGER>,
        maxPacketLossRateUL?: OPTIONAL<INTEGER>
    ) {
        this.fiveQi = fiveQi;
        this.aRP = aRP;
        this.qoSNotificationControl = qoSNotificationControl;
        this.reflectiveQos = reflectiveQos;
        this.maxbitrateUL = maxbitrateUL;
        this.maxbitrateDL = maxbitrateDL;
        this.guaranteedbitrateUL = guaranteedbitrateUL;
        this.guaranteedbitrateDL = guaranteedbitrateDL;
        this.priorityLevel = priorityLevel;
        this.averWindow = averWindow;
        this.maxDataBurstVol = maxDataBurstVol;
        this.maxPacketLossRateDL = maxPacketLossRateDL;
        this.maxPacketLossRateUL = maxPacketLossRateUL;
    }

    /**
     * @summary Restructures an object into a FiveGQoSInformation
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGQoSInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGQoSInformation`.
     * @returns {FiveGQoSInformation}
     */
    public static _from_object (_o: { [_K in keyof (FiveGQoSInformation)]: (FiveGQoSInformation)[_K] }): FiveGQoSInformation {
        return new FiveGQoSInformation(_o.fiveQi, _o.aRP, _o.qoSNotificationControl, _o.reflectiveQos, _o.maxbitrateUL, _o.maxbitrateDL, _o.guaranteedbitrateUL, _o.guaranteedbitrateDL, _o.priorityLevel, _o.averWindow, _o.maxDataBurstVol, _o.maxPacketLossRateDL, _o.maxPacketLossRateUL);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGQoSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGQoSInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("fiveQi", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aRP", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("qoSNotificationControl", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("reflectiveQos", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("maxbitrateUL", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("maxbitrateDL", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("guaranteedbitrateUL", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("guaranteedbitrateDL", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("priorityLevel", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("averWindow", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("maxDataBurstVol", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("maxPacketLossRateDL", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("maxPacketLossRateUL", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of FiveGQoSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGQoSInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGQoSInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGQoSInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGQoSInformation: $.ASN1Decoder<FiveGQoSInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGQoSInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGQoSInformation (el: _Element): FiveGQoSInformation {
    if (!_cached_decoder_for_FiveGQoSInformation) { _cached_decoder_for_FiveGQoSInformation = function (el: _Element): FiveGQoSInformation {
    let fiveQi!: INTEGER;
    let aRP!: AllocationRetentionPriority;
    let qoSNotificationControl: OPTIONAL<BOOLEAN>;
    let reflectiveQos: OPTIONAL<BOOLEAN>;
    let maxbitrateUL: OPTIONAL<OCTET_STRING>;
    let maxbitrateDL: OPTIONAL<OCTET_STRING>;
    let guaranteedbitrateUL: OPTIONAL<OCTET_STRING>;
    let guaranteedbitrateDL: OPTIONAL<OCTET_STRING>;
    let priorityLevel: OPTIONAL<INTEGER>;
    let averWindow: OPTIONAL<INTEGER>;
    let maxDataBurstVol: OPTIONAL<INTEGER>;
    let maxPacketLossRateDL: OPTIONAL<INTEGER>;
    let maxPacketLossRateUL: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "fiveQi": (_el: _Element): void => { fiveQi = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "aRP": (_el: _Element): void => { aRP = $._decode_implicit<AllocationRetentionPriority>(() => _decode_AllocationRetentionPriority)(_el); },
        "qoSNotificationControl": (_el: _Element): void => { qoSNotificationControl = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "reflectiveQos": (_el: _Element): void => { reflectiveQos = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "maxbitrateUL": (_el: _Element): void => { maxbitrateUL = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "maxbitrateDL": (_el: _Element): void => { maxbitrateDL = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "guaranteedbitrateUL": (_el: _Element): void => { guaranteedbitrateUL = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "guaranteedbitrateDL": (_el: _Element): void => { guaranteedbitrateDL = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "priorityLevel": (_el: _Element): void => { priorityLevel = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "averWindow": (_el: _Element): void => { averWindow = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxDataBurstVol": (_el: _Element): void => { maxDataBurstVol = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxPacketLossRateDL": (_el: _Element): void => { maxPacketLossRateDL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxPacketLossRateUL": (_el: _Element): void => { maxPacketLossRateUL = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FiveGQoSInformation,
        _extension_additions_list_spec_for_FiveGQoSInformation,
        _root_component_type_list_2_spec_for_FiveGQoSInformation,
        undefined,
    );
    return new FiveGQoSInformation(
        fiveQi,
        aRP,
        qoSNotificationControl,
        reflectiveQos,
        maxbitrateUL,
        maxbitrateDL,
        guaranteedbitrateUL,
        guaranteedbitrateDL,
        priorityLevel,
        averWindow,
        maxDataBurstVol,
        maxPacketLossRateDL,
        maxPacketLossRateUL
    );
}; }
    return _cached_decoder_for_FiveGQoSInformation(el);
}

let _cached_encoder_for_FiveGQoSInformation: $.ASN1Encoder<FiveGQoSInformation> | null = null;

/**
 * @summary Encodes a(n) FiveGQoSInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGQoSInformation, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGQoSInformation (value: FiveGQoSInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGQoSInformation) { _cached_encoder_for_FiveGQoSInformation = function (value: FiveGQoSInformation, _elGetter: $.ASN1Encoder<FiveGQoSInformation>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.fiveQi, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AllocationRetentionPriority, $.BER)(value.aRP, $.BER));
    if (value.qoSNotificationControl !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.qoSNotificationControl, $.BER));
    }
    if (value.reflectiveQos !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.reflectiveQos, $.BER));
    }
    if (value.maxbitrateUL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.maxbitrateUL, $.BER));
    }
    if (value.maxbitrateDL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.maxbitrateDL, $.BER));
    }
    if (value.guaranteedbitrateUL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.guaranteedbitrateUL, $.BER));
    }
    if (value.guaranteedbitrateDL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.guaranteedbitrateDL, $.BER));
    }
    if (value.priorityLevel !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.priorityLevel, $.BER));
    }
    if (value.averWindow !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.averWindow, $.BER));
    }
    if (value.maxDataBurstVol !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeInteger, $.BER)(value.maxDataBurstVol, $.BER));
    }
    if (value.maxPacketLossRateDL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER)(value.maxPacketLossRateDL, $.BER));
    }
    if (value.maxPacketLossRateUL !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.maxPacketLossRateUL, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FiveGQoSInformation(value, elGetter);
}


/* eslint-enable */
