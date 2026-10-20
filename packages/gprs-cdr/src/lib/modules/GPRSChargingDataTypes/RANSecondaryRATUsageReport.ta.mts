/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RANSecondaryRATUsageReport_secondaryRATType, _decode_RANSecondaryRATUsageReport_secondaryRATType, _encode_RANSecondaryRATUsageReport_secondaryRATType } from "../GPRSChargingDataTypes/RANSecondaryRATUsageReport-secondaryRATType.ta.mjs";


/**
 * @summary RANSecondaryRATUsageReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANSecondaryRATUsageReport ::= SEQUENCE {
 *    dataVolumeUplink     [1] IMPLICIT INTEGER,
 *    dataVolumeDownlink   [2] IMPLICIT INTEGER,
 *    rANStartTime         [3] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    rANEndTime           [4] IMPLICIT OCTET STRING ( SIZE( 9 ) ),
 *    secondaryRATType     [5] IMPLICIT INTEGER {
 *       nR          ( 0 )} OPTIONAL,
 *    chargingID           [6] IMPLICIT INTEGER ( 0 .. 4294967295 ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class RANSecondaryRATUsageReport {
    /**
     * @summary `dataVolumeUplink`.
     * @public
     * @readonly
     */
    readonly dataVolumeUplink: INTEGER;
    /**
     * @summary `dataVolumeDownlink`.
     * @public
     * @readonly
     */
    readonly dataVolumeDownlink: INTEGER;
    /**
     * @summary `rANStartTime`.
     * @public
     * @readonly
     */
    readonly rANStartTime: OCTET_STRING;
    /**
     * @summary `rANEndTime`.
     * @public
     * @readonly
     */
    readonly rANEndTime: OCTET_STRING;
    /**
     * @summary `secondaryRATType`.
     * @public
     * @readonly
     */
    readonly secondaryRATType: OPTIONAL<RANSecondaryRATUsageReport_secondaryRATType>;
    /**
     * @summary `chargingID`.
     * @public
     * @readonly
     */
    readonly chargingID: OPTIONAL<INTEGER>;

    constructor (
        dataVolumeUplink: INTEGER,
        dataVolumeDownlink: INTEGER,
        rANStartTime: OCTET_STRING,
        rANEndTime: OCTET_STRING,
        secondaryRATType: OPTIONAL<RANSecondaryRATUsageReport_secondaryRATType>,
        chargingID: OPTIONAL<INTEGER>
    ) {
        this.dataVolumeUplink = dataVolumeUplink;
        this.dataVolumeDownlink = dataVolumeDownlink;
        this.rANStartTime = rANStartTime;
        this.rANEndTime = rANEndTime;
        this.secondaryRATType = secondaryRATType;
        this.chargingID = chargingID;
    
        if ((this.rANStartTime.length !== 9)) {
            throw new ASN1SizeError("RANSecondaryRATUsageReport.rANStartTime violates SIZE constraint");
        }
        if ((this.rANEndTime.length !== 9)) {
            throw new ASN1SizeError("RANSecondaryRATUsageReport.rANEndTime violates SIZE constraint");
        }
        if (this.chargingID !== undefined && ((typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) < 0 || (typeof this.chargingID === "bigint" ? Number(this.chargingID) : this.chargingID) > 4294967295)) {
            throw new ASN1OverflowError("RANSecondaryRATUsageReport.chargingID violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a RANSecondaryRATUsageReport
     * @description
     * 
     * This takes an `object` and converts it to a `RANSecondaryRATUsageReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RANSecondaryRATUsageReport`.
     * @returns {RANSecondaryRATUsageReport}
     */
    public static _from_object (_o: { [_K in keyof (RANSecondaryRATUsageReport)]: (RANSecondaryRATUsageReport)[_K] }): RANSecondaryRATUsageReport {
        return new RANSecondaryRATUsageReport(_o.dataVolumeUplink, _o.dataVolumeDownlink, _o.rANStartTime, _o.rANEndTime, _o.secondaryRATType, _o.chargingID);
    }


}

/**
 * @summary The Leading Root Component Types of RANSecondaryRATUsageReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RANSecondaryRATUsageReport: $.ComponentSpec[] = [
    new $.ComponentSpec("dataVolumeUplink", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dataVolumeDownlink", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rANStartTime", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rANEndTime", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("secondaryRATType", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("chargingID", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of RANSecondaryRATUsageReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RANSecondaryRATUsageReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RANSecondaryRATUsageReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RANSecondaryRATUsageReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RANSecondaryRATUsageReport: $.ASN1Decoder<RANSecondaryRATUsageReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RANSecondaryRATUsageReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RANSecondaryRATUsageReport (el: _Element): RANSecondaryRATUsageReport {
    if (!_cached_decoder_for_RANSecondaryRATUsageReport) { _cached_decoder_for_RANSecondaryRATUsageReport = function (el: _Element): RANSecondaryRATUsageReport {
    let dataVolumeUplink!: INTEGER;
    let dataVolumeDownlink!: INTEGER;
    let rANStartTime!: OCTET_STRING;
    let rANEndTime!: OCTET_STRING;
    let secondaryRATType: OPTIONAL<RANSecondaryRATUsageReport_secondaryRATType>;
    let chargingID: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "dataVolumeUplink": (_el: _Element): void => { dataVolumeUplink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dataVolumeDownlink": (_el: _Element): void => { dataVolumeDownlink = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "rANStartTime": (_el: _Element): void => { rANStartTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "rANEndTime": (_el: _Element): void => { rANEndTime = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "secondaryRATType": (_el: _Element): void => { secondaryRATType = $._decode_implicit<RANSecondaryRATUsageReport_secondaryRATType>(() => _decode_RANSecondaryRATUsageReport_secondaryRATType)(_el); },
        "chargingID": (_el: _Element): void => { chargingID = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RANSecondaryRATUsageReport,
        _extension_additions_list_spec_for_RANSecondaryRATUsageReport,
        _root_component_type_list_2_spec_for_RANSecondaryRATUsageReport,
        undefined,
    );
    return new RANSecondaryRATUsageReport(
        dataVolumeUplink,
        dataVolumeDownlink,
        rANStartTime,
        rANEndTime,
        secondaryRATType,
        chargingID
    );
}; }
    return _cached_decoder_for_RANSecondaryRATUsageReport(el);
}

let _cached_encoder_for_RANSecondaryRATUsageReport: $.ASN1Encoder<RANSecondaryRATUsageReport> | null = null;

/**
 * @summary Encodes a(n) RANSecondaryRATUsageReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANSecondaryRATUsageReport, encoded as an ASN.1 Element.
 */
export
function _encode_RANSecondaryRATUsageReport (value: RANSecondaryRATUsageReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RANSecondaryRATUsageReport) { _cached_encoder_for_RANSecondaryRATUsageReport = function (value: RANSecondaryRATUsageReport, _elGetter: $.ASN1Encoder<RANSecondaryRATUsageReport>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.dataVolumeUplink, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.dataVolumeDownlink, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.rANStartTime, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.rANEndTime, $.BER));
    if (value.secondaryRATType !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_RANSecondaryRATUsageReport_secondaryRATType, $.BER)(value.secondaryRATType, $.BER));
    }
    if (value.chargingID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.chargingID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RANSecondaryRATUsageReport(value, elGetter);
}


/* eslint-enable */
