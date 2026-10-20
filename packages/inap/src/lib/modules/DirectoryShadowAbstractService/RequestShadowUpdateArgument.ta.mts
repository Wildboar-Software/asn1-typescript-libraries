/* eslint-disable */
import {
    EXTERNAL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { AgreementID, _decode_AgreementID, _encode_AgreementID } from "../DirectoryShadowAbstractService/AgreementID.ta.mjs";
// export { AgreementID, _decode_AgreementID, _encode_AgreementID } from "../DirectoryShadowAbstractService/AgreementID.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../DirectoryShadowAbstractService/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../DirectoryShadowAbstractService/Time.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";


/**
 * @summary RequestShadowUpdateArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestShadowUpdateArgument  ::= 
 *   OPTIONALLY-PROTECTED
 *     {[0]  SEQUENCE {agreementID         AgreementID,
 *                     lastUpdate          Time OPTIONAL,
 *                     requestedStrategy
 *                       CHOICE {standard  ENUMERATED {incremental(1), total(2)},
 *                               other     EXTERNAL},
 *                     securityParameters  SecurityParameters OPTIONAL
 *     }}
 * ```
 */
export
type RequestShadowUpdateArgument = OPTIONALLY_PROTECTED<{ agreementID: OPTIONAL<AgreementID>; lastUpdate: Time; requestedStrategy: OPTIONAL<({ standard: undefined } | { other: EXTERNAL })>; securityParameters: SecurityParameters }>; // DefinedType

let _cached_decoder_for_RequestShadowUpdateArgument: $.ASN1Decoder<RequestShadowUpdateArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestShadowUpdateArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestShadowUpdateArgument (el: _Element): RequestShadowUpdateArgument {
    if (!_cached_decoder_for_RequestShadowUpdateArgument) { _cached_decoder_for_RequestShadowUpdateArgument = _get_decoder_for_OPTIONALLY_PROTECTED<{ agreementID: OPTIONAL<AgreementID>; lastUpdate: Time; requestedStrategy: OPTIONAL<({ standard: undefined } | { other: EXTERNAL })>; securityParameters: SecurityParameters }>($._decode_implicit<{ agreementID: OPTIONAL<AgreementID>; lastUpdate: Time; requestedStrategy: OPTIONAL<({ standard: undefined } | { other: EXTERNAL })>; securityParameters: SecurityParameters }>(() => function (el: _Element): OPTIONALLY_PROTECTED {
    let agreementID!: AgreementID;
    let lastUpdate: OPTIONAL<Time>;
    let requestedStrategy!: ({ standard: undefined } | { other: EXTERNAL });
    let securityParameters: OPTIONAL<SecurityParameters>;
    const callbacks: $.DecodingMap = {
        "agreementID": (_el: _Element): void => { agreementID = _decode_AgreementID(_el); },
        "lastUpdate": (_el: _Element): void => { lastUpdate = _decode_Time(_el); },
        "requestedStrategy": (_el: _Element): void => { requestedStrategy = $._decode_inextensible_choice<requestedStrategy>({
    "UNIVERSAL 10": [ "standard", $._decodeEnumerated ],
    "UNIVERSAL 8": [ "other", $._decodeExternal ]
})(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = _decode_SecurityParameters(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OPTIONALLY_PROTECTED,
        _extension_additions_list_spec_for_OPTIONALLY_PROTECTED,
        _root_component_type_list_2_spec_for_OPTIONALLY_PROTECTED,
        undefined,
    );
    return new OPTIONALLY_PROTECTED(
        agreementID,
        lastUpdate,
        requestedStrategy,
        securityParameters
    );
})); }
    return _cached_decoder_for_RequestShadowUpdateArgument(el);
}

let _cached_encoder_for_RequestShadowUpdateArgument: $.ASN1Encoder<RequestShadowUpdateArgument> | null = null;

/**
 * @summary Encodes a(n) RequestShadowUpdateArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestShadowUpdateArgument, encoded as an ASN.1 Element.
 */
export
function _encode_RequestShadowUpdateArgument (value: RequestShadowUpdateArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestShadowUpdateArgument) { _cached_encoder_for_RequestShadowUpdateArgument = _get_encoder_for_OPTIONALLY_PROTECTED<{ agreementID: OPTIONAL<AgreementID>; lastUpdate: Time; requestedStrategy: OPTIONAL<({ standard: undefined } | { other: EXTERNAL })>; securityParameters: SecurityParameters }>($._encode_implicit(_TagClass.context, 0, () => function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AgreementID(value.agreementID, $.BER));
    if (value.lastUpdate !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Time(value.lastUpdate, $.BER));
    }
    /* FIXME: requestedStrategy COULD_NOT_COMPILE_TYPE_ENCODER */
    if (value.securityParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SecurityParameters(value.securityParameters, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}, $.BER)); }
    return _cached_encoder_for_RequestShadowUpdateArgument(value, elGetter);
}


/* eslint-enable */
