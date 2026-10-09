/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
// export { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { ScanResponse_scanStatus, _decode_ScanResponse_scanStatus, _encode_ScanResponse_scanStatus } from "../Z39-50-APDU-2001/ScanResponse-scanStatus.ta.mjs";
// export { ScanResponse_scanStatus, ScanResponse_scanStatus_success /* IMPORTED_LONG_NAMED_INTEGER */, success /* IMPORTED_SHORT_NAMED_INTEGER */, ScanResponse_scanStatus_partial_1 /* IMPORTED_LONG_NAMED_INTEGER */, partial_1 /* IMPORTED_SHORT_NAMED_INTEGER */, ScanResponse_scanStatus_partial_2 /* IMPORTED_LONG_NAMED_INTEGER */, partial_2 /* IMPORTED_SHORT_NAMED_INTEGER */, ScanResponse_scanStatus_partial_3 /* IMPORTED_LONG_NAMED_INTEGER */, partial_3 /* IMPORTED_SHORT_NAMED_INTEGER */, ScanResponse_scanStatus_partial_4 /* IMPORTED_LONG_NAMED_INTEGER */, partial_4 /* IMPORTED_SHORT_NAMED_INTEGER */, ScanResponse_scanStatus_partial_5 /* IMPORTED_LONG_NAMED_INTEGER */, partial_5 /* IMPORTED_SHORT_NAMED_INTEGER */, ScanResponse_scanStatus_failure /* IMPORTED_LONG_NAMED_INTEGER */, failure /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ScanResponse_scanStatus, _encode_ScanResponse_scanStatus } from "../Z39-50-APDU-2001/ScanResponse-scanStatus.ta.mjs";
import { ListEntries, _decode_ListEntries, _encode_ListEntries } from "../Z39-50-APDU-2001/ListEntries.ta.mjs";
// export { ListEntries, _decode_ListEntries, _encode_ListEntries } from "../Z39-50-APDU-2001/ListEntries.ta.mjs";
import { AttributeSetId, _decode_AttributeSetId, _encode_AttributeSetId } from "../Z39-50-APDU-2001/AttributeSetId.ta.mjs";
// export { AttributeSetId, _decode_AttributeSetId, _encode_AttributeSetId } from "../Z39-50-APDU-2001/AttributeSetId.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";
// export { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary ScanResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScanResponse ::= SEQUENCE {
 *     referenceId             ReferenceId OPTIONAL,
 *     stepSize                [3] IMPLICIT INTEGER OPTIONAL,
 *     scanStatus              [4] IMPLICIT INTEGER {
 *         success     (0),
 *         partial-1   (1),
 *         partial-2   (2),
 *         partial-3   (3),
 *         partial-4   (4),
 *         partial-5   (5),
 *         failure     (6)
 *     },
 *     numberOfEntriesReturned [5] IMPLICIT INTEGER,
 *     positionOfTerm          [6] IMPLICIT INTEGER OPTIONAL,
 *     entries                 [7] IMPLICIT ListEntries OPTIONAL,
 *     attributeSet            [8] IMPLICIT AttributeSetId OPTIONAL,
 *     -- SEE COMMENT 3
 *     otherInfo               OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ScanResponse {
    /**
     * @summary `referenceId`.
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `stepSize`.
     * @public
     * @readonly
     */
    readonly stepSize: OPTIONAL<INTEGER>;
    /**
     * @summary `scanStatus`.
     * @public
     * @readonly
     */
    readonly scanStatus: ScanResponse_scanStatus;
    /**
     * @summary `numberOfEntriesReturned`.
     * @public
     * @readonly
     */
    readonly numberOfEntriesReturned: INTEGER;
    /**
     * @summary `positionOfTerm`.
     * @public
     * @readonly
     */
    readonly positionOfTerm: OPTIONAL<INTEGER>;
    /**
     * @summary `entries`.
     * @public
     * @readonly
     */
    readonly entries: OPTIONAL<ListEntries>;
    /**
     * @summary `attributeSet`.
     * @public
     * @readonly
     */
    readonly attributeSet: OPTIONAL<AttributeSetId>;
    /**
     * @summary `otherInfo`.
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        stepSize: OPTIONAL<INTEGER>,
        scanStatus: ScanResponse_scanStatus,
        numberOfEntriesReturned: INTEGER,
        positionOfTerm: OPTIONAL<INTEGER>,
        entries: OPTIONAL<ListEntries>,
        attributeSet: OPTIONAL<AttributeSetId>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.stepSize = stepSize;
        this.scanStatus = scanStatus;
        this.numberOfEntriesReturned = numberOfEntriesReturned;
        this.positionOfTerm = positionOfTerm;
        this.entries = entries;
        this.attributeSet = attributeSet;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a ScanResponse
     * @description
     * 
     * This takes an `object` and converts it to a `ScanResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScanResponse`.
     * @returns {ScanResponse}
     */
    public static _from_object (_o: { [_K in keyof (ScanResponse)]: (ScanResponse)[_K] }): ScanResponse {
        return new ScanResponse(_o.referenceId, _o.stepSize, _o.scanStatus, _o.numberOfEntriesReturned, _o.positionOfTerm, _o.entries, _o.attributeSet, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ScanResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ScanResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("stepSize", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("scanStatus", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("numberOfEntriesReturned", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("positionOfTerm", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("entries", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("attributeSet", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of ScanResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ScanResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ScanResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ScanResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ScanResponse: $.ASN1Decoder<ScanResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScanResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScanResponse (el: _Element): ScanResponse {
    if (!_cached_decoder_for_ScanResponse) { _cached_decoder_for_ScanResponse = function (el: _Element): ScanResponse {
    let referenceId: OPTIONAL<ReferenceId>;
    let stepSize: OPTIONAL<INTEGER>;
    let scanStatus!: ScanResponse_scanStatus;
    let numberOfEntriesReturned!: INTEGER;
    let positionOfTerm: OPTIONAL<INTEGER>;
    let entries: OPTIONAL<ListEntries>;
    let attributeSet: OPTIONAL<AttributeSetId>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "stepSize": (_el: _Element): void => { stepSize = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "scanStatus": (_el: _Element): void => { scanStatus = $._decode_implicit<ScanResponse_scanStatus>(() => _decode_ScanResponse_scanStatus)(_el); },
        "numberOfEntriesReturned": (_el: _Element): void => { numberOfEntriesReturned = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "positionOfTerm": (_el: _Element): void => { positionOfTerm = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "entries": (_el: _Element): void => { entries = $._decode_implicit<ListEntries>(() => _decode_ListEntries)(_el); },
        "attributeSet": (_el: _Element): void => { attributeSet = $._decode_implicit<AttributeSetId>(() => _decode_AttributeSetId)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ScanResponse,
        _extension_additions_list_spec_for_ScanResponse,
        _root_component_type_list_2_spec_for_ScanResponse,
        undefined,
    );
    return new ScanResponse(
        referenceId,
        stepSize,
        scanStatus,
        numberOfEntriesReturned,
        positionOfTerm,
        entries,
        attributeSet,
        otherInfo
    );
}; }
    return _cached_decoder_for_ScanResponse(el);
}

let _cached_encoder_for_ScanResponse: $.ASN1Encoder<ScanResponse> | null = null;

/**
 * @summary Encodes a(n) ScanResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScanResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ScanResponse (value: ScanResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScanResponse) { _cached_encoder_for_ScanResponse = function (value: ScanResponse, elGetter: $.ASN1Encoder<ScanResponse>): _Element {
    const _components: _Element[] = new Array(8);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    if (value.stepSize !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.stepSize, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_ScanResponse_scanStatus, $.BER)(value.scanStatus, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.numberOfEntriesReturned, $.BER);
    if (value.positionOfTerm !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.positionOfTerm, $.BER);
    }
    if (value.entries !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ListEntries, $.BER)(value.entries, $.BER);
    }
    if (value.attributeSet !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_AttributeSetId, $.BER)(value.attributeSet, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ScanResponse(value, elGetter);
}


/* eslint-enable */
