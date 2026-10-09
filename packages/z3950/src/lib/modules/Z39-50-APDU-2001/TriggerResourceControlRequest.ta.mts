/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { TriggerResourceControlRequest_requestedAction, _decode_TriggerResourceControlRequest_requestedAction, _encode_TriggerResourceControlRequest_requestedAction } from "../Z39-50-APDU-2001/TriggerResourceControlRequest-requestedAction.ta.mjs";
import { ResourceReportId, _decode_ResourceReportId, _encode_ResourceReportId } from "../Z39-50-APDU-2001/ResourceReportId.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary TriggerResourceControlRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerResourceControlRequest ::= SEQUENCE {
 *     referenceId                 ReferenceId OPTIONAL,
 *     requestedAction             [46] IMPLICIT INTEGER{
 *         resourceReport (1),
 *         resourceControl (2),
 *         cancel          (3)
 *     },
 *     prefResourceReportFormat    [47] IMPLICIT ResourceReportId OPTIONAL,
 *     resultSetWanted             [48] IMPLICIT BOOLEAN OPTIONAL,
 *     otherInfo                   OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TriggerResourceControlRequest {
    /**
     * @summary `referenceId`.
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `requestedAction`.
     * @public
     * @readonly
     */
    readonly requestedAction: TriggerResourceControlRequest_requestedAction;
    /**
     * @summary `prefResourceReportFormat`.
     * @public
     * @readonly
     */
    readonly prefResourceReportFormat: OPTIONAL<ResourceReportId>;
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
        requestedAction: TriggerResourceControlRequest_requestedAction,
        prefResourceReportFormat: OPTIONAL<ResourceReportId>,
        resultSetWanted: OPTIONAL<BOOLEAN>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.requestedAction = requestedAction;
        this.prefResourceReportFormat = prefResourceReportFormat;
        this.resultSetWanted = resultSetWanted;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a TriggerResourceControlRequest
     * @description
     * 
     * This takes an `object` and converts it to a `TriggerResourceControlRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TriggerResourceControlRequest`.
     * @returns {TriggerResourceControlRequest}
     */
    public static _from_object (_o: { [_K in keyof (TriggerResourceControlRequest)]: (TriggerResourceControlRequest)[_K] }): TriggerResourceControlRequest {
        return new TriggerResourceControlRequest(_o.referenceId, _o.requestedAction, _o.prefResourceReportFormat, _o.resultSetWanted, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of TriggerResourceControlRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TriggerResourceControlRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("requestedAction", false, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("prefResourceReportFormat", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("resultSetWanted", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of TriggerResourceControlRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TriggerResourceControlRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TriggerResourceControlRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TriggerResourceControlRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TriggerResourceControlRequest: $.ASN1Decoder<TriggerResourceControlRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerResourceControlRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerResourceControlRequest (el: _Element): TriggerResourceControlRequest {
    if (!_cached_decoder_for_TriggerResourceControlRequest) { _cached_decoder_for_TriggerResourceControlRequest = function (el: _Element): TriggerResourceControlRequest {
    let referenceId: OPTIONAL<ReferenceId>;
    let requestedAction!: TriggerResourceControlRequest_requestedAction;
    let prefResourceReportFormat: OPTIONAL<ResourceReportId>;
    let resultSetWanted: OPTIONAL<BOOLEAN>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "requestedAction": (_el: _Element): void => { requestedAction = $._decode_implicit<TriggerResourceControlRequest_requestedAction>(() => _decode_TriggerResourceControlRequest_requestedAction)(_el); },
        "prefResourceReportFormat": (_el: _Element): void => { prefResourceReportFormat = $._decode_implicit<ResourceReportId>(() => _decode_ResourceReportId)(_el); },
        "resultSetWanted": (_el: _Element): void => { resultSetWanted = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TriggerResourceControlRequest,
        _extension_additions_list_spec_for_TriggerResourceControlRequest,
        _root_component_type_list_2_spec_for_TriggerResourceControlRequest,
        undefined,
    );
    return new TriggerResourceControlRequest(
        referenceId,
        requestedAction,
        prefResourceReportFormat,
        resultSetWanted,
        otherInfo
    );
}; }
    return _cached_decoder_for_TriggerResourceControlRequest(el);
}

let _cached_encoder_for_TriggerResourceControlRequest: $.ASN1Encoder<TriggerResourceControlRequest> | null = null;

/**
 * @summary Encodes a(n) TriggerResourceControlRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerResourceControlRequest, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerResourceControlRequest (value: TriggerResourceControlRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerResourceControlRequest) { _cached_encoder_for_TriggerResourceControlRequest = function (value: TriggerResourceControlRequest, elGetter: $.ASN1Encoder<TriggerResourceControlRequest>): _Element {
    const _components: _Element[] = new Array(5);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 46, () => _encode_TriggerResourceControlRequest_requestedAction, $.BER)(value.requestedAction, $.BER);
    if (value.prefResourceReportFormat !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 47, () => _encode_ResourceReportId, $.BER)(value.prefResourceReportFormat, $.BER);
    }
    if (value.resultSetWanted !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 48, () => $._encodeBoolean, $.BER)(value.resultSetWanted, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TriggerResourceControlRequest(value, elGetter);
}


/* eslint-enable */
