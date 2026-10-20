/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS3-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS3-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS3-SSF-SCF-datatypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS3-SSF-SCF-datatypes/ScfID.ta.mjs";
import { UserToConnect, _decode_UserToConnect, _encode_UserToConnect } from "../IN-CS3-SCF-SCF-datatypes/UserToConnect.ta.mjs";
// export { UserToConnect, _enum_for_UserToConnect, UserToConnect_first /* IMPORTED_LONG_ENUMERATION_ITEM */, first /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_nofirst /* IMPORTED_LONG_ENUMERATION_ITEM */, nofirst /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_newone /* IMPORTED_LONG_ENUMERATION_ITEM */, newone /* IMPORTED_SHORT_ENUMERATION_ITEM */, UserToConnect_previous /* IMPORTED_LONG_ENUMERATION_ITEM */, previous /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UserToConnect, _encode_UserToConnect } from "../IN-CS3-SCF-SCF-datatypes/UserToConnect.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary RunUserScriptArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RunUserScriptArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {srfAddress          [0]  CalledPartyNumber,
 *                correlationID       [1]  CorrelationID,
 *                scfID               [2]  ScfID,
 *                userToConnect       [3]  UserToConnect OPTIONAL,
 *                securityParameters  [7]  SecurityParameters OPTIONAL,
 *                ...,
 *                ...,
 *                extensions          [30]  Extensions OPTIONAL
 *     }}
 * ```
 */
export
interface RunUserScriptArg_sequence {
    srfAddress: CalledPartyNumber;
    correlationID: CorrelationID;
    scfID: ScfID;
    userToConnect?: OPTIONAL<UserToConnect>;
    securityParameters?: OPTIONAL<SecurityParameters>;
    _unrecognizedExtensionsList: _Element[];
    extensions?: OPTIONAL<Extensions>;
}

export
type RunUserScriptArg = OPTIONALLY_PROTECTED<RunUserScriptArg_sequence>; // DefinedType

const _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [
    new $.ComponentSpec("srfAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("scfID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("userToConnect", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 7)),
];

const _extension_additions_list_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [];

const _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 30)),
];

let _cached_decoder_for_RunUserScriptArg: $.ASN1Decoder<RunUserScriptArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RunUserScriptArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RunUserScriptArg (el: _Element): RunUserScriptArg {
    if (!_cached_decoder_for_RunUserScriptArg) { _cached_decoder_for_RunUserScriptArg = _get_decoder_for_OPTIONALLY_PROTECTED<RunUserScriptArg_sequence>(function (el: _Element): RunUserScriptArg_sequence {
    let srfAddress!: CalledPartyNumber;
    let correlationID!: CorrelationID;
    let scfID!: ScfID;
    let userToConnect: OPTIONAL<UserToConnect>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "srfAddress": (_el: _Element): void => { srfAddress = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "userToConnect": (_el: _Element): void => { userToConnect = $._decode_implicit<UserToConnect>(() => _decode_UserToConnect)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return { srfAddress, correlationID, scfID, userToConnect, securityParameters, _unrecognizedExtensionsList, extensions };
}); }
    return _cached_decoder_for_RunUserScriptArg(el);
}

let _cached_encoder_for_RunUserScriptArg: $.ASN1Encoder<RunUserScriptArg> | null = null;

/**
 * @summary Encodes a(n) RunUserScriptArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RunUserScriptArg, encoded as an ASN.1 Element.
 */
export
function _encode_RunUserScriptArg (value: RunUserScriptArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RunUserScriptArg) { _cached_encoder_for_RunUserScriptArg = _get_encoder_for_OPTIONALLY_PROTECTED<RunUserScriptArg_sequence>(function (value: RunUserScriptArg_sequence, elGetter: $.ASN1Encoder<RunUserScriptArg_sequence>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CalledPartyNumber, $.BER)(value.srfAddress, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ScfID, $.BER)(value.scfID, $.BER);
    if (value.userToConnect !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_UserToConnect, $.BER)(value.userToConnect, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
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
    return _cached_encoder_for_RunUserScriptArg(value, elGetter);
}


/* eslint-enable */
