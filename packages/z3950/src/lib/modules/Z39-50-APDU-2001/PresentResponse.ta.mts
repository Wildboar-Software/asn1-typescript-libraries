/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { PresentStatus, _decode_PresentStatus, _encode_PresentStatus } from "../Z39-50-APDU-2001/PresentStatus.ta.mjs";
import { Records, _decode_Records, _encode_Records } from "../Z39-50-APDU-2001/Records.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary PresentResponse
 * @description
 *
 * Last segment of an aggregate Present response, and the terminating
 * response of the Present operation. If no Segment requests were
 * sent, this message alone is a simple Present response.
 * `presentStatus` refers to the whole aggregate, not only this
 * message. `numberOfRecordsReturned` and `nextResultSetPosition`
 * likewise cover the aggregate. §3.2.3, §3.2.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentResponse ::= SEQUENCE {
 *     referenceId             ReferenceId OPTIONAL,
 *     numberOfRecordsReturned [24] IMPLICIT INTEGER,
 *     nextResultSetPosition   [25] IMPLICIT INTEGER,
 *     presentStatus           PresentStatus,
 *     records                 Records OPTIONAL,
 *     otherInfo               OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PresentResponse {
    /**
     * @summary `referenceId`.
     * @description
     *
     * The reference-id of the Present operation. Include the same
     * value when the request included one; omit it when the request
     * omitted it. §3.4.
     *
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `numberOfRecordsReturned`.
     * @description
     *
     * Total number of records in the aggregate Present response, not
     * only in this message. §3.2.3.1.9.
     *
     * @public
     * @readonly
     */
    readonly numberOfRecordsReturned: INTEGER;
    /**
     * @summary `nextResultSetPosition`.
     * @description
     *
     * M+1, where M is the result-set position of the last record
     * included in the aggregate response. Zero when M is the position
     * of the last result-set item. §3.2.3.1.9.
     *
     * @public
     * @readonly
     */
    readonly nextResultSetPosition: INTEGER;
    /**
     * @summary `presentStatus`.
     * @description
     *
     * Mandatory. Same values as Present-status on a Search response.
     * Refers to the aggregate Present response. §3.2.3.1.10,
     * §3.2.2.1.11.
     *
     * @public
     * @readonly
     */
    readonly presentStatus: PresentStatus;
    /**
     * @summary `records`.
     * @description
     *
     * Response records, or, when level-2 segmentation is in effect, a
     * final fragment followed by zero or more response records. If
     * this operation sent no Segment requests, this may instead be one
     * or more non-surrogate diagnostics (exactly one when version 2 is
     * in force) saying why the request cannot be processed. Positions
     * are ascending; gaps occur only when `additionalRanges` was
     * requested, and then they match those gaps. §3.2.3.1.8.
     *
     * @public
     * @readonly
     */
    readonly records: OPTIONAL<Records>;
    /**
     * @summary `otherInfo`.
     * @description
     *
     * Additional information not specified by the standard. Version 3
     * only. §3.2.3.1.11.
     *
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        numberOfRecordsReturned: INTEGER,
        nextResultSetPosition: INTEGER,
        presentStatus: PresentStatus,
        records: OPTIONAL<Records>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.numberOfRecordsReturned = numberOfRecordsReturned;
        this.nextResultSetPosition = nextResultSetPosition;
        this.presentStatus = presentStatus;
        this.records = records;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a PresentResponse
     * @description
     * 
     * This takes an `object` and converts it to a `PresentResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PresentResponse`.
     * @returns {PresentResponse}
     */
    public static _from_object (_o: { [_K in keyof (PresentResponse)]: (PresentResponse)[_K] }): PresentResponse {
        return new PresentResponse(_o.referenceId, _o.numberOfRecordsReturned, _o.nextResultSetPosition, _o.presentStatus, _o.records, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of PresentResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PresentResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("numberOfRecordsReturned", false, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("nextResultSetPosition", false, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("presentStatus", false, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("records", true, $.or($.hasTag(_TagClass.context, 28), $.hasTag(_TagClass.context, 130), $.hasTag(_TagClass.context, 205))),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of PresentResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PresentResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PresentResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PresentResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PresentResponse: $.ASN1Decoder<PresentResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresentResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresentResponse (el: _Element): PresentResponse {
    if (!_cached_decoder_for_PresentResponse) { _cached_decoder_for_PresentResponse = function (el: _Element): PresentResponse {
    let referenceId: OPTIONAL<ReferenceId>;
    let numberOfRecordsReturned!: INTEGER;
    let nextResultSetPosition!: INTEGER;
    let presentStatus!: PresentStatus;
    let records: OPTIONAL<Records>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "numberOfRecordsReturned": (_el: _Element): void => { numberOfRecordsReturned = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "nextResultSetPosition": (_el: _Element): void => { nextResultSetPosition = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "presentStatus": (_el: _Element): void => { presentStatus = _decode_PresentStatus(_el); },
        "records": (_el: _Element): void => { records = _decode_Records(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PresentResponse,
        _extension_additions_list_spec_for_PresentResponse,
        _root_component_type_list_2_spec_for_PresentResponse,
        undefined,
    );
    return new PresentResponse(
        referenceId,
        numberOfRecordsReturned,
        nextResultSetPosition,
        presentStatus,
        records,
        otherInfo
    );
}; }
    return _cached_decoder_for_PresentResponse(el);
}

let _cached_encoder_for_PresentResponse: $.ASN1Encoder<PresentResponse> | null = null;

/**
 * @summary Encodes a(n) PresentResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentResponse, encoded as an ASN.1 Element.
 */
export
function _encode_PresentResponse (value: PresentResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresentResponse) { _cached_encoder_for_PresentResponse = function (value: PresentResponse, elGetter: $.ASN1Encoder<PresentResponse>): _Element {
    const _components: _Element[] = new Array(6);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 24, () => $._encodeInteger, $.BER)(value.numberOfRecordsReturned, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 25, () => $._encodeInteger, $.BER)(value.nextResultSetPosition, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 27, () => _encode_PresentStatus, $.BER)(value.presentStatus, $.BER);
    if (value.records !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_Records(value.records, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PresentResponse(value, elGetter);
}


/* eslint-enable */
