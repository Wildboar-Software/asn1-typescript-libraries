/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { RequestedType, _decode_RequestedType, _encode_RequestedType } from "../IN-SCF-SCF-datatypes/RequestedType.ta.mjs";
// export { RequestedType, _decode_RequestedType, _encode_RequestedType } from "../IN-SCF-SCF-datatypes/RequestedType.ta.mjs";
import { DestinationRelatedInfo, _decode_DestinationRelatedInfo, _encode_DestinationRelatedInfo } from "../IN-SCF-SCF-datatypes/DestinationRelatedInfo.ta.mjs";
// export { DestinationRelatedInfo, _decode_DestinationRelatedInfo, _encode_DestinationRelatedInfo } from "../IN-SCF-SCF-datatypes/DestinationRelatedInfo.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary InitiateCallRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateCallRequestArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {requestedType           [0]  RequestedType OPTIONAL,
 *                destinationRelatedInfo
 *                  [1]  SEQUENCE SIZE (1..2) OF DestinationRelatedInfo
 *                    OPTIONAL,
 *                securityParameters      [2]  SecurityParameters OPTIONAL,
 *                extensions              [3]  Extensions OPTIONAL,
 *                ...}}
 * ```
 */
export
interface InitiateCallRequestArg_sequence {
    requestedType?: OPTIONAL<RequestedType>;
    destinationRelatedInfo?: OPTIONAL<DestinationRelatedInfo[]>;
    securityParameters?: OPTIONAL<SecurityParameters>;
    extensions?: OPTIONAL<Extensions>;
    _unrecognizedExtensionsList: _Element[];
}

export
type InitiateCallRequestArg = OPTIONALLY_PROTECTED<InitiateCallRequestArg_sequence>; // DefinedType

const _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("destinationRelatedInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3)),
];

const _extension_additions_list_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [];

const _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [];

let _cached_decoder_for_InitiateCallRequestArg: $.ASN1Decoder<InitiateCallRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateCallRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateCallRequestArg (el: _Element): InitiateCallRequestArg {
    if (!_cached_decoder_for_InitiateCallRequestArg) { _cached_decoder_for_InitiateCallRequestArg = _get_decoder_for_OPTIONALLY_PROTECTED<InitiateCallRequestArg_sequence>(function (el: _Element): InitiateCallRequestArg_sequence {
    let requestedType: OPTIONAL<RequestedType>;
    let destinationRelatedInfo: OPTIONAL<DestinationRelatedInfo[]>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestedType": (_el: _Element): void => { requestedType = $._decode_implicit<RequestedType>(() => _decode_RequestedType)(_el); },
        "destinationRelatedInfo": (_el: _Element): void => { destinationRelatedInfo = $._decode_implicit<DestinationRelatedInfo[]>(() => $._decodeSequenceOf<DestinationRelatedInfo>(() => _decode_DestinationRelatedInfo))(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return { requestedType, destinationRelatedInfo, securityParameters, extensions, _unrecognizedExtensionsList };
}); }
    return _cached_decoder_for_InitiateCallRequestArg(el);
}

let _cached_encoder_for_InitiateCallRequestArg: $.ASN1Encoder<InitiateCallRequestArg> | null = null;

/**
 * @summary Encodes a(n) InitiateCallRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateCallRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateCallRequestArg (value: InitiateCallRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateCallRequestArg) { _cached_encoder_for_InitiateCallRequestArg = _get_encoder_for_OPTIONALLY_PROTECTED<InitiateCallRequestArg_sequence>(function (value: InitiateCallRequestArg_sequence, elGetter: $.ASN1Encoder<InitiateCallRequestArg_sequence>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.requestedType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedType, $.BER)(value.requestedType, $.BER);
    }
    if (value.destinationRelatedInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<DestinationRelatedInfo>(() => _encode_DestinationRelatedInfo, $.BER), $.BER)(value.destinationRelatedInfo, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_InitiateCallRequestArg(value, elGetter);
}


/* eslint-enable */
