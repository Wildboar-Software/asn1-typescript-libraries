/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
// export { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";
// export { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary ResourceControlResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceControlResponse ::= SEQUENCE {
 *     referenceId     ReferenceId OPTIONAL,
 *     continueFlag    [44] IMPLICIT BOOLEAN,
 *     resultSetWanted [45] IMPLICIT BOOLEAN OPTIONAL,
 *     otherInfo       OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ResourceControlResponse {
    /**
     * @summary `referenceId`.
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `continueFlag`.
     * @public
     * @readonly
     */
    readonly continueFlag: BOOLEAN;
    /**
     * @summary `resultSetWanted`.
     * @public
     * @readonly
     */
    readonly resultSetWanted: OPTIONAL<BOOLEAN>;
    /**
     * @summary `otherInfo`.
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        continueFlag: BOOLEAN,
        resultSetWanted: OPTIONAL<BOOLEAN>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.continueFlag = continueFlag;
        this.resultSetWanted = resultSetWanted;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a ResourceControlResponse
     * @description
     * 
     * This takes an `object` and converts it to a `ResourceControlResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResourceControlResponse`.
     * @returns {ResourceControlResponse}
     */
    public static _from_object (_o: { [_K in keyof (ResourceControlResponse)]: (ResourceControlResponse)[_K] }): ResourceControlResponse {
        return new ResourceControlResponse(_o.referenceId, _o.continueFlag, _o.resultSetWanted, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ResourceControlResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResourceControlResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("continueFlag", false, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("resultSetWanted", true, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of ResourceControlResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResourceControlResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResourceControlResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResourceControlResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResourceControlResponse: $.ASN1Decoder<ResourceControlResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceControlResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceControlResponse (el: _Element): ResourceControlResponse {
    if (!_cached_decoder_for_ResourceControlResponse) { _cached_decoder_for_ResourceControlResponse = function (el: _Element): ResourceControlResponse {
    let referenceId: OPTIONAL<ReferenceId>;
    let continueFlag!: BOOLEAN;
    let resultSetWanted: OPTIONAL<BOOLEAN>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "continueFlag": (_el: _Element): void => { continueFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "resultSetWanted": (_el: _Element): void => { resultSetWanted = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResourceControlResponse,
        _extension_additions_list_spec_for_ResourceControlResponse,
        _root_component_type_list_2_spec_for_ResourceControlResponse,
        undefined,
    );
    return new ResourceControlResponse(
        referenceId,
        continueFlag,
        resultSetWanted,
        otherInfo
    );
}; }
    return _cached_decoder_for_ResourceControlResponse(el);
}

let _cached_encoder_for_ResourceControlResponse: $.ASN1Encoder<ResourceControlResponse> | null = null;

/**
 * @summary Encodes a(n) ResourceControlResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceControlResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceControlResponse (value: ResourceControlResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceControlResponse) { _cached_encoder_for_ResourceControlResponse = function (value: ResourceControlResponse, elGetter: $.ASN1Encoder<ResourceControlResponse>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 44, () => $._encodeBoolean, $.BER)(value.continueFlag, $.BER);
    if (value.resultSetWanted !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 45, () => $._encodeBoolean, $.BER)(value.resultSetWanted, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ResourceControlResponse(value, elGetter);
}


/* eslint-enable */
