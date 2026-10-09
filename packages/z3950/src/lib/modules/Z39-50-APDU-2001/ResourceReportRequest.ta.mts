/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
// export { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { ResourceReportId, _decode_ResourceReportId, _encode_ResourceReportId } from "../Z39-50-APDU-2001/ResourceReportId.ta.mjs";
// export { ResourceReportId, _decode_ResourceReportId, _encode_ResourceReportId } from "../Z39-50-APDU-2001/ResourceReportId.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";
// export { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary ResourceReportRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceReportRequest ::= SEQUENCE {
 *     referenceId                 ReferenceId OPTIONAL,
 *     opId                        [210] IMPLICIT ReferenceId OPTIONAL,
 *     prefResourceReportFormat    [49] IMPLICIT ResourceReportId OPTIONAL,
 *     otherInfo                   OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ResourceReportRequest {
    /**
     * @summary `referenceId`.
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `opId`.
     * @public
     * @readonly
     */
    readonly opId: OPTIONAL<ReferenceId>;
    /**
     * @summary `prefResourceReportFormat`.
     * @public
     * @readonly
     */
    readonly prefResourceReportFormat: OPTIONAL<ResourceReportId>;
    /**
     * @summary `otherInfo`.
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        opId: OPTIONAL<ReferenceId>,
        prefResourceReportFormat: OPTIONAL<ResourceReportId>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.opId = opId;
        this.prefResourceReportFormat = prefResourceReportFormat;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a ResourceReportRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ResourceReportRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResourceReportRequest`.
     * @returns {ResourceReportRequest}
     */
    public static _from_object (_o: { [_K in keyof (ResourceReportRequest)]: (ResourceReportRequest)[_K] }): ResourceReportRequest {
        return new ResourceReportRequest(_o.referenceId, _o.opId, _o.prefResourceReportFormat, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ResourceReportRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResourceReportRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("opId", true, $.hasTag(_TagClass.context, 210)),
    new $.ComponentSpec("prefResourceReportFormat", true, $.hasTag(_TagClass.context, 49)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of ResourceReportRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResourceReportRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResourceReportRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResourceReportRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResourceReportRequest: $.ASN1Decoder<ResourceReportRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceReportRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceReportRequest (el: _Element): ResourceReportRequest {
    if (!_cached_decoder_for_ResourceReportRequest) { _cached_decoder_for_ResourceReportRequest = function (el: _Element): ResourceReportRequest {
    let referenceId: OPTIONAL<ReferenceId>;
    let opId: OPTIONAL<ReferenceId>;
    let prefResourceReportFormat: OPTIONAL<ResourceReportId>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "opId": (_el: _Element): void => { opId = $._decode_implicit<ReferenceId>(() => _decode_ReferenceId)(_el); },
        "prefResourceReportFormat": (_el: _Element): void => { prefResourceReportFormat = $._decode_implicit<ResourceReportId>(() => _decode_ResourceReportId)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResourceReportRequest,
        _extension_additions_list_spec_for_ResourceReportRequest,
        _root_component_type_list_2_spec_for_ResourceReportRequest,
        undefined,
    );
    return new ResourceReportRequest(
        referenceId,
        opId,
        prefResourceReportFormat,
        otherInfo
    );
}; }
    return _cached_decoder_for_ResourceReportRequest(el);
}

let _cached_encoder_for_ResourceReportRequest: $.ASN1Encoder<ResourceReportRequest> | null = null;

/**
 * @summary Encodes a(n) ResourceReportRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceReportRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceReportRequest (value: ResourceReportRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceReportRequest) { _cached_encoder_for_ResourceReportRequest = function (value: ResourceReportRequest, elGetter: $.ASN1Encoder<ResourceReportRequest>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    if (value.opId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 210, () => _encode_ReferenceId, $.BER)(value.opId, $.BER);
    }
    if (value.prefResourceReportFormat !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 49, () => _encode_ResourceReportId, $.BER)(value.prefResourceReportFormat, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ResourceReportRequest(value, elGetter);
}


/* eslint-enable */
