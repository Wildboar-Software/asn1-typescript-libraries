/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
// export { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { SortKeySpec, _decode_SortKeySpec, _encode_SortKeySpec } from "../Z39-50-APDU-2001/SortKeySpec.ta.mjs";
// export { SortKeySpec, _decode_SortKeySpec, _encode_SortKeySpec } from "../Z39-50-APDU-2001/SortKeySpec.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";
// export { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary SortRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortRequest ::= SEQUENCE {
 *     referenceId         ReferenceId OPTIONAL,
 *     inputResultSetNames [3] IMPLICIT SEQUENCE OF InternationalString,
 *     sortedResultSetName [4] IMPLICIT InternationalString,
 *     sortSequence        [5] IMPLICIT SEQUENCE OF SortKeySpec,
 *     --Separate instance of SortKeySpec for each sort key
 *     --Order of occurrence is from major to minor
 *     otherInfo           OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SortRequest {
    /**
     * @summary `referenceId`.
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `inputResultSetNames`.
     * @public
     * @readonly
     */
    readonly inputResultSetNames: InternationalString[];
    /**
     * @summary `sortedResultSetName`.
     * @public
     * @readonly
     */
    readonly sortedResultSetName: InternationalString;
    /**
     * @summary `sortSequence`.
     * @public
     * @readonly
     */
    readonly sortSequence: SortKeySpec[];
    /**
     * @summary `otherInfo`.
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        inputResultSetNames: InternationalString[],
        sortedResultSetName: InternationalString,
        sortSequence: SortKeySpec[],
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.inputResultSetNames = inputResultSetNames;
        this.sortedResultSetName = sortedResultSetName;
        this.sortSequence = sortSequence;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a SortRequest
     * @description
     * 
     * This takes an `object` and converts it to a `SortRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SortRequest`.
     * @returns {SortRequest}
     */
    public static _from_object (_o: { [_K in keyof (SortRequest)]: (SortRequest)[_K] }): SortRequest {
        return new SortRequest(_o.referenceId, _o.inputResultSetNames, _o.sortedResultSetName, _o.sortSequence, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of SortRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SortRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("inputResultSetNames", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sortedResultSetName", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sortSequence", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of SortRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SortRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SortRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SortRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SortRequest: $.ASN1Decoder<SortRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortRequest (el: _Element): SortRequest {
    if (!_cached_decoder_for_SortRequest) { _cached_decoder_for_SortRequest = function (el: _Element): SortRequest {
    let referenceId: OPTIONAL<ReferenceId>;
    let inputResultSetNames!: InternationalString[];
    let sortedResultSetName!: InternationalString;
    let sortSequence!: SortKeySpec[];
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "inputResultSetNames": (_el: _Element): void => { inputResultSetNames = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "sortedResultSetName": (_el: _Element): void => { sortedResultSetName = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "sortSequence": (_el: _Element): void => { sortSequence = $._decode_implicit<SortKeySpec[]>(() => $._decodeSequenceOf<SortKeySpec>(() => _decode_SortKeySpec))(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SortRequest,
        _extension_additions_list_spec_for_SortRequest,
        _root_component_type_list_2_spec_for_SortRequest,
        undefined,
    );
    return new SortRequest(
        referenceId,
        inputResultSetNames,
        sortedResultSetName,
        sortSequence,
        otherInfo
    );
}; }
    return _cached_decoder_for_SortRequest(el);
}

let _cached_encoder_for_SortRequest: $.ASN1Encoder<SortRequest> | null = null;

/**
 * @summary Encodes a(n) SortRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortRequest, encoded as an ASN.1 Element.
 */
export
function _encode_SortRequest (value: SortRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortRequest) { _cached_encoder_for_SortRequest = function (value: SortRequest, elGetter: $.ASN1Encoder<SortRequest>): _Element {
    const _components: _Element[] = new Array(5);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.inputResultSetNames, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER)(value.sortedResultSetName, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<SortKeySpec>(() => _encode_SortKeySpec, $.BER), $.BER)(value.sortSequence, $.BER);
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SortRequest(value, elGetter);
}


/* eslint-enable */
