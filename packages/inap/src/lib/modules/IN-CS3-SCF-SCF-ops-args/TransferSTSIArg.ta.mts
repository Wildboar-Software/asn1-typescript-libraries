/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { SSIInfo, _decode_SSIInfo, _encode_SSIInfo } from "../IN-CS3-SCF-SCF-datatypes/SSIInfo.ta.mjs";
// export { SSIInfo, _decode_SSIInfo, _encode_SSIInfo } from "../IN-CS3-SCF-SCF-datatypes/SSIInfo.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary TransferSTSIArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransferSTSIArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {sSIInfo             SSIInfo,
 *                securityParameters  [2]  SecurityParameters OPTIONAL,
 *                ...,
 *                ...,
 *                extensions          [3]  Extensions OPTIONAL
 *     }}
 * ```
 */
export
interface TransferSTSIArg_sequence {
    sSIInfo: SSIInfo;
    securityParameters?: OPTIONAL<SecurityParameters>;
    _unrecognizedExtensionsList: _Element[];
    extensions?: OPTIONAL<Extensions>;
}

export
type TransferSTSIArg = OPTIONALLY_PROTECTED<TransferSTSIArg_sequence>; // DefinedType

const _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [
    new $.ComponentSpec("sSIInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 2)),
];

const _extension_additions_list_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [];

const _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3)),
];

let _cached_decoder_for_TransferSTSIArg: $.ASN1Decoder<TransferSTSIArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransferSTSIArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransferSTSIArg (el: _Element): TransferSTSIArg {
    if (!_cached_decoder_for_TransferSTSIArg) { _cached_decoder_for_TransferSTSIArg = _get_decoder_for_OPTIONALLY_PROTECTED<TransferSTSIArg_sequence>(function (el: _Element): TransferSTSIArg_sequence {
    let sSIInfo!: SSIInfo;
    let securityParameters: OPTIONAL<SecurityParameters>;
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "sSIInfo": (_el: _Element): void => { sSIInfo = _decode_SSIInfo(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return { sSIInfo, securityParameters, _unrecognizedExtensionsList, extensions };
}); }
    return _cached_decoder_for_TransferSTSIArg(el);
}

let _cached_encoder_for_TransferSTSIArg: $.ASN1Encoder<TransferSTSIArg> | null = null;

/**
 * @summary Encodes a(n) TransferSTSIArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferSTSIArg, encoded as an ASN.1 Element.
 */
export
function _encode_TransferSTSIArg (value: TransferSTSIArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransferSTSIArg) { _cached_encoder_for_TransferSTSIArg = _get_encoder_for_OPTIONALLY_PROTECTED<TransferSTSIArg_sequence>(function (value: TransferSTSIArg_sequence, elGetter: $.ASN1Encoder<TransferSTSIArg_sequence>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_SSIInfo(value.sSIInfo, $.BER);
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}); }
    return _cached_encoder_for_TransferSTSIArg(value, elGetter);
}


/* eslint-enable */
