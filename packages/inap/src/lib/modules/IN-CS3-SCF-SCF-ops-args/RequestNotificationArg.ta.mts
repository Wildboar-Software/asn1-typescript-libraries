/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { RequestedNotifications, _decode_RequestedNotifications, _encode_RequestedNotifications } from "../IN-CS3-SCF-SCF-datatypes/RequestedNotifications.ta.mjs";
// export { RequestedNotifications, _decode_RequestedNotifications, _encode_RequestedNotifications } from "../IN-CS3-SCF-SCF-datatypes/RequestedNotifications.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary RequestNotificationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestNotificationArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {requestedNotifications  [0]  RequestedNotifications,
 *                securityParameters      [1]  SecurityParameters OPTIONAL,
 *                ...,
 *                ...,
 *                extensions              [30]  Extensions OPTIONAL
 *     }}
 * ```
 */
export
interface RequestNotificationArg_sequence {
    requestedNotifications: RequestedNotifications;
    securityParameters?: OPTIONAL<SecurityParameters>;
    _unrecognizedExtensionsList: _Element[];
    extensions?: OPTIONAL<Extensions>;
}

export
type RequestNotificationArg = OPTIONALLY_PROTECTED<RequestNotificationArg_sequence>; // DefinedType

const _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedNotifications", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 1)),
];

const _extension_additions_list_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [];

const _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 30)),
];

let _cached_decoder_for_RequestNotificationArg: $.ASN1Decoder<RequestNotificationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestNotificationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestNotificationArg (el: _Element): RequestNotificationArg {
    if (!_cached_decoder_for_RequestNotificationArg) { _cached_decoder_for_RequestNotificationArg = _get_decoder_for_OPTIONALLY_PROTECTED<RequestNotificationArg_sequence>(function (el: _Element): RequestNotificationArg_sequence {
    let requestedNotifications!: RequestedNotifications;
    let securityParameters: OPTIONAL<SecurityParameters>;
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "requestedNotifications": (_el: _Element): void => { requestedNotifications = $._decode_implicit<RequestedNotifications>(() => _decode_RequestedNotifications)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return { requestedNotifications, securityParameters, _unrecognizedExtensionsList, extensions };
}); }
    return _cached_decoder_for_RequestNotificationArg(el);
}

let _cached_encoder_for_RequestNotificationArg: $.ASN1Encoder<RequestNotificationArg> | null = null;

/**
 * @summary Encodes a(n) RequestNotificationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestNotificationArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestNotificationArg (value: RequestNotificationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestNotificationArg) { _cached_encoder_for_RequestNotificationArg = _get_encoder_for_OPTIONALLY_PROTECTED<RequestNotificationArg_sequence>(function (value: RequestNotificationArg_sequence, elGetter: $.ASN1Encoder<RequestNotificationArg_sequence>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedNotifications, $.BER)(value.requestedNotifications, $.BER);
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_RequestNotificationArg(value, elGetter);
}


/* eslint-enable */
