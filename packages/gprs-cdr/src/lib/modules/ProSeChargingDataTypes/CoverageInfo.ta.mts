/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CoverageStatus, _decode_CoverageStatus, _encode_CoverageStatus, _enum_for_CoverageStatus } from "../ProSeChargingDataTypes/CoverageStatus.ta.mjs";
import { LocationInfo, _decode_LocationInfo, _encode_LocationInfo } from "../ProSeChargingDataTypes/LocationInfo.ta.mjs";


/**
 * @summary CoverageInfo
 * @description
 *
 * One coverage-status change for ProSe Direct Communication, with the time of
 * the change. While the UE is in E-UTRAN coverage, `listOfLocation` also
 * carries each ECGI change and its timestamp. On receipt of a usage information
 * report these containers are added to every open group PF-DC-CDR, if the UE
 * was configured to include them.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.2.3.1.2, 6.1.3.4, and 6.3.1.2.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.7.6B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CoverageInfo ::= SEQUENCE {
 *    coverageStatus   [0] IMPLICIT CoverageStatus,
 *    timeStamp        [1] IMPLICIT OCTET STRING ( SIZE( 9 ) ) OPTIONAL,
 *    listOfLocation   [2] IMPLICIT SEQUENCE  OF
 *       LocationInfo OPTIONAL}
 * ```
 * 
 * @class
 */
export
class CoverageInfo {
    /**
     * @summary `coverageStatus`.
     * @description
     *
     * Whether the UE is served by E-UTRAN after this change.
     *
     * 3GPP TS 32.277 V19.2.0 clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly coverageStatus: CoverageStatus;
    /**
     * @summary `timeStamp`.
     * @description
     *
     * Time the coverage status changed to `coverageStatus`.
     *
     * 3GPP TS 32.277 V19.2.0 clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly timeStamp: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `listOfLocation`.
     * @description
     *
     * ECGI changes, and the time of each change, recorded while the UE is in
     * E-UTRAN coverage. Omitted for an out-of-coverage period.
     *
     * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3 and 6.1.3.4.
     *
     * @public
     * @readonly
     */
    readonly listOfLocation: OPTIONAL<LocationInfo[]>;

    constructor (
        coverageStatus: CoverageStatus,
        timeStamp?: OPTIONAL<OCTET_STRING>,
        listOfLocation?: OPTIONAL<LocationInfo[]>
    ) {
        this.coverageStatus = coverageStatus;
        this.timeStamp = timeStamp;
        this.listOfLocation = listOfLocation;
    
        if (this.timeStamp !== undefined && (this.timeStamp.length !== 9)) {
            throw new ASN1SizeError("CoverageInfo.timeStamp violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a CoverageInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CoverageInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CoverageInfo`.
     * @returns {CoverageInfo}
     */
    public static _from_object (_o: { [_K in keyof (CoverageInfo)]: (CoverageInfo)[_K] }): CoverageInfo {
        return new CoverageInfo(_o.coverageStatus, _o.timeStamp, _o.listOfLocation);
    }

        /**
         * @summary The enum used as the type of the component `coverageStatus`
         * @public
         * @static
         */

    public static _enum_for_coverageStatus = _enum_for_CoverageStatus;
}

/**
 * @summary The Leading Root Component Types of CoverageInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CoverageInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("coverageStatus", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("listOfLocation", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CoverageInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CoverageInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CoverageInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CoverageInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CoverageInfo: $.ASN1Decoder<CoverageInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CoverageInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CoverageInfo (el: _Element): CoverageInfo {
    if (!_cached_decoder_for_CoverageInfo) { _cached_decoder_for_CoverageInfo = function (el: _Element): CoverageInfo {
    let coverageStatus!: CoverageStatus;
    let timeStamp: OPTIONAL<OCTET_STRING>;
    let listOfLocation: OPTIONAL<LocationInfo[]>;
    const callbacks: $.DecodingMap = {
        "coverageStatus": (_el: _Element): void => { coverageStatus = $._decode_implicit<CoverageStatus>(() => _decode_CoverageStatus)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "listOfLocation": (_el: _Element): void => { listOfLocation = $._decode_implicit<LocationInfo[]>(() => $._decodeSequenceOf<LocationInfo>(() => _decode_LocationInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CoverageInfo,
        _extension_additions_list_spec_for_CoverageInfo,
        _root_component_type_list_2_spec_for_CoverageInfo,
        undefined,
    );
    return new CoverageInfo(
        coverageStatus,
        timeStamp,
        listOfLocation
    );
}; }
    return _cached_decoder_for_CoverageInfo(el);
}

let _cached_encoder_for_CoverageInfo: $.ASN1Encoder<CoverageInfo> | null = null;

/**
 * @summary Encodes a(n) CoverageInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoverageInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CoverageInfo (value: CoverageInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CoverageInfo) { _cached_encoder_for_CoverageInfo = function (value: CoverageInfo, _elGetter: $.ASN1Encoder<CoverageInfo>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CoverageStatus, $.BER)(value.coverageStatus, $.BER));
    if (value.timeStamp !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.timeStamp, $.BER));
    }
    if (value.listOfLocation !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<LocationInfo>(() => _encode_LocationInfo, $.BER), $.BER)(value.listOfLocation, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CoverageInfo(value, elGetter);
}


/* eslint-enable */
