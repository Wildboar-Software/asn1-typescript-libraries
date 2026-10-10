/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { NamePlusRecord, _decode_NamePlusRecord, _encode_NamePlusRecord } from "../Z39-50-APDU-2001/NamePlusRecord.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary Segment
 * @description
 *
 * One segment of an aggregate Present response, other than the last.
 * A non-confirmed message from the server during a Present operation.
 * Version 3 only, and only when segmentation is in effect. If the
 * requested records fit in one segment, the server sends only a
 * Present response. The last segment is always a Present response.
 * Level 1: each segment holds a whole number of records. Level 2:
 * records may span segments. §3.2.3.2, §3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Segment ::= SEQUENCE {
 *     -- Segment APDU may only be used when version 3 is in force, and only when segmentation is in effect
 *     referenceId             ReferenceId OPTIONAL,
 *     numberOfRecordsReturned [24] IMPLICIT INTEGER,
 *     segmentRecords          [0] IMPLICIT SEQUENCE OF NamePlusRecord,
 *     otherInfo               OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Segment {
    /**
     * @summary `referenceId`.
     * @description
     *
     * Reference-id of the Present operation this segment belongs to.
     * Include it when the Present request included one; omit it when
     * the request omitted it. §3.4, §3.2.3.2.
     *
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `numberOfRecordsReturned`.
     * @description
     *
     * Number of response records and starting fragments in this
     * segment, not in the aggregate response. §3.2.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly numberOfRecordsReturned: INTEGER;
    /**
     * @summary `segmentRecords`.
     * @description
     *
     * Level 1: a sequence of whole response records. Level 2: may also
     * include fragments. It may be a final fragment (not in the first
     * segment), then zero or more response records, then a starting
     * fragment. If neither fragment is present there is at least one
     * response record. A diagnostic record is not segmented. Database
     * names follow the same rules as on a Present response.
     * §3.2.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly segmentRecords: NamePlusRecord[];
    /**
     * @summary `otherInfo`.
     * @description
     *
     * Additional information not specified by the standard. The
     * Segment service itself is version 3 only. §3.2.3.2.3.
     *
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        numberOfRecordsReturned: INTEGER,
        segmentRecords: NamePlusRecord[],
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.numberOfRecordsReturned = numberOfRecordsReturned;
        this.segmentRecords = segmentRecords;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a Segment
     * @description
     * 
     * This takes an `object` and converts it to a `Segment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Segment`.
     * @returns {Segment}
     */
    public static _from_object (_o: { [_K in keyof (Segment)]: (Segment)[_K] }): Segment {
        return new Segment(_o.referenceId, _o.numberOfRecordsReturned, _o.segmentRecords, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of Segment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Segment: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("numberOfRecordsReturned", false, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("segmentRecords", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of Segment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Segment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Segment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Segment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Segment: $.ASN1Decoder<Segment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Segment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Segment (el: _Element): Segment {
    if (!_cached_decoder_for_Segment) { _cached_decoder_for_Segment = function (el: _Element): Segment {
    let referenceId: OPTIONAL<ReferenceId>;
    let numberOfRecordsReturned!: INTEGER;
    let segmentRecords!: NamePlusRecord[];
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "numberOfRecordsReturned": (_el: _Element): void => { numberOfRecordsReturned = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "segmentRecords": (_el: _Element): void => { segmentRecords = $._decode_implicit<NamePlusRecord[]>(() => $._decodeSequenceOf<NamePlusRecord>(() => _decode_NamePlusRecord))(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Segment,
        _extension_additions_list_spec_for_Segment,
        _root_component_type_list_2_spec_for_Segment,
        undefined,
    );
    return new Segment(
        referenceId,
        numberOfRecordsReturned,
        segmentRecords,
        otherInfo
    );
}; }
    return _cached_decoder_for_Segment(el);
}

let _cached_encoder_for_Segment: $.ASN1Encoder<Segment> | null = null;

/**
 * @summary Encodes a(n) Segment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Segment, encoded as an ASN.1 Element.
 */
export
function _encode_Segment (value: Segment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Segment) { _cached_encoder_for_Segment = function (value: Segment, elGetter: $.ASN1Encoder<Segment>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 24, () => $._encodeInteger, $.BER)(value.numberOfRecordsReturned, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<NamePlusRecord>(() => _encode_NamePlusRecord, $.BER), $.BER)(value.segmentRecords, $.BER);
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Segment(value, elGetter);
}


/* eslint-enable */
