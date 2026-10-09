/* eslint-disable */
import {
    EXTERNAL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { ExtendedServicesResponse_operationStatus, _decode_ExtendedServicesResponse_operationStatus, _encode_ExtendedServicesResponse_operationStatus } from "../Z39-50-APDU-2001/ExtendedServicesResponse-operationStatus.ta.mjs";
import { DiagRec, _decode_DiagRec, _encode_DiagRec } from "../Z39-50-APDU-2001/DiagRec.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary ExtendedServicesResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedServicesResponse ::= SEQUENCE {
 *     referenceId     ReferenceId OPTIONAL,
 *     operationStatus [3] IMPLICIT INTEGER{
 *         done    (1),
 *         accepted(2),
 *         failure (3)
 *     },
 *     diagnostics     [4] IMPLICIT SEQUENCE OF DiagRec OPTIONAL,
 *     taskPackage     [5] IMPLICIT EXTERNAL OPTIONAL,
 *     -- Use OID: {Z39-50-recordSyntax (106)} and corresponding syntax.
 *     -- For the EXTERNAL, 'taskSpecific,' within that definition, use OID
 *     -- of the specific ES, and choose [2], 'taskPackage'.
 *     otherInfo       OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ExtendedServicesResponse {
    /**
     * @summary `referenceId`.
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `operationStatus`.
     * @public
     * @readonly
     */
    readonly operationStatus: ExtendedServicesResponse_operationStatus;
    /**
     * @summary `diagnostics`.
     * @public
     * @readonly
     */
    readonly diagnostics: OPTIONAL<DiagRec[]>;
    /**
     * @summary `taskPackage`.
     * @public
     * @readonly
     */
    readonly taskPackage: OPTIONAL<EXTERNAL>;
    /**
     * @summary `otherInfo`.
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        operationStatus: ExtendedServicesResponse_operationStatus,
        diagnostics: OPTIONAL<DiagRec[]>,
        taskPackage: OPTIONAL<EXTERNAL>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.operationStatus = operationStatus;
        this.diagnostics = diagnostics;
        this.taskPackage = taskPackage;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a ExtendedServicesResponse
     * @description
     * 
     * This takes an `object` and converts it to a `ExtendedServicesResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedServicesResponse`.
     * @returns {ExtendedServicesResponse}
     */
    public static _from_object (_o: { [_K in keyof (ExtendedServicesResponse)]: (ExtendedServicesResponse)[_K] }): ExtendedServicesResponse {
        return new ExtendedServicesResponse(_o.referenceId, _o.operationStatus, _o.diagnostics, _o.taskPackage, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of ExtendedServicesResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtendedServicesResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("operationStatus", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("diagnostics", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("taskPackage", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of ExtendedServicesResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtendedServicesResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtendedServicesResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtendedServicesResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtendedServicesResponse: $.ASN1Decoder<ExtendedServicesResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedServicesResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedServicesResponse (el: _Element): ExtendedServicesResponse {
    if (!_cached_decoder_for_ExtendedServicesResponse) { _cached_decoder_for_ExtendedServicesResponse = function (el: _Element): ExtendedServicesResponse {
    let referenceId: OPTIONAL<ReferenceId>;
    let operationStatus!: ExtendedServicesResponse_operationStatus;
    let diagnostics: OPTIONAL<DiagRec[]>;
    let taskPackage: OPTIONAL<EXTERNAL>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "operationStatus": (_el: _Element): void => { operationStatus = $._decode_implicit<ExtendedServicesResponse_operationStatus>(() => _decode_ExtendedServicesResponse_operationStatus)(_el); },
        "diagnostics": (_el: _Element): void => { diagnostics = $._decode_implicit<DiagRec[]>(() => $._decodeSequenceOf<DiagRec>(() => _decode_DiagRec))(_el); },
        "taskPackage": (_el: _Element): void => { taskPackage = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtendedServicesResponse,
        _extension_additions_list_spec_for_ExtendedServicesResponse,
        _root_component_type_list_2_spec_for_ExtendedServicesResponse,
        undefined,
    );
    return new ExtendedServicesResponse(
        referenceId,
        operationStatus,
        diagnostics,
        taskPackage,
        otherInfo
    );
}; }
    return _cached_decoder_for_ExtendedServicesResponse(el);
}

let _cached_encoder_for_ExtendedServicesResponse: $.ASN1Encoder<ExtendedServicesResponse> | null = null;

/**
 * @summary Encodes a(n) ExtendedServicesResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedServicesResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedServicesResponse (value: ExtendedServicesResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedServicesResponse) { _cached_encoder_for_ExtendedServicesResponse = function (value: ExtendedServicesResponse, elGetter: $.ASN1Encoder<ExtendedServicesResponse>): _Element {
    const _components: _Element[] = new Array(5);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_ExtendedServicesResponse_operationStatus, $.BER)(value.operationStatus, $.BER);
    if (value.diagnostics !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<DiagRec>(() => _encode_DiagRec, $.BER), $.BER)(value.diagnostics, $.BER);
    }
    if (value.taskPackage !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeExternal, $.BER)(value.taskPackage, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ExtendedServicesResponse(value, elGetter);
}


/* eslint-enable */
