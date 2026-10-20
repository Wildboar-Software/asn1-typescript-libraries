/* eslint-disable */
import {
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
import { UpdateWindow, _decode_UpdateWindow, _encode_UpdateWindow } from "../DirectoryShadowAbstractService/UpdateWindow.ta.mjs";
// export { UpdateWindow, _decode_UpdateWindow, _encode_UpdateWindow } from "../DirectoryShadowAbstractService/UpdateWindow.ta.mjs";
import { RefreshInformation, _decode_RefreshInformation, _encode_RefreshInformation } from "../DirectoryShadowAbstractService/RefreshInformation.ta.mjs";
// export { RefreshInformation, _decode_RefreshInformation, _encode_RefreshInformation } from "../DirectoryShadowAbstractService/RefreshInformation.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";


/**
 * @summary UpdateShadowArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateShadowArgument  ::= 
 *   OPTIONALLY-PROTECTED
 *     {[0]  SEQUENCE {agreementID         AgreementID,
 *                     updateTime          Time,
 *                     updateWindow        UpdateWindow OPTIONAL,
 *                     updatedInfo         RefreshInformation,
 *                     securityParameters  SecurityParameters OPTIONAL
 *     }}
 * ```
 */
export
type UpdateShadowArgument = OPTIONALLY_PROTECTED<{ agreementID: OPTIONAL<AgreementID>; updateTime: OPTIONAL<Time>; updateWindow: UpdateWindow; updatedInfo: OPTIONAL<RefreshInformation>; securityParameters: SecurityParameters }>; // DefinedType

let _cached_decoder_for_UpdateShadowArgument: $.ASN1Decoder<UpdateShadowArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateShadowArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateShadowArgument (el: _Element): UpdateShadowArgument {
    if (!_cached_decoder_for_UpdateShadowArgument) { _cached_decoder_for_UpdateShadowArgument = _get_decoder_for_OPTIONALLY_PROTECTED<{ agreementID: OPTIONAL<AgreementID>; updateTime: OPTIONAL<Time>; updateWindow: UpdateWindow; updatedInfo: OPTIONAL<RefreshInformation>; securityParameters: SecurityParameters }>($._decode_implicit<{ agreementID: OPTIONAL<AgreementID>; updateTime: OPTIONAL<Time>; updateWindow: UpdateWindow; updatedInfo: OPTIONAL<RefreshInformation>; securityParameters: SecurityParameters }>(() => function (el: _Element): OPTIONALLY_PROTECTED {
    let agreementID!: AgreementID;
    let updateTime!: Time;
    let updateWindow: OPTIONAL<UpdateWindow>;
    let updatedInfo!: RefreshInformation;
    let securityParameters: OPTIONAL<SecurityParameters>;
    const callbacks: $.DecodingMap = {
        "agreementID": (_el: _Element): void => { agreementID = _decode_AgreementID(_el); },
        "updateTime": (_el: _Element): void => { updateTime = _decode_Time(_el); },
        "updateWindow": (_el: _Element): void => { updateWindow = _decode_UpdateWindow(_el); },
        "updatedInfo": (_el: _Element): void => { updatedInfo = _decode_RefreshInformation(_el); },
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
        updateTime,
        updateWindow,
        updatedInfo,
        securityParameters
    );
})); }
    return _cached_decoder_for_UpdateShadowArgument(el);
}

let _cached_encoder_for_UpdateShadowArgument: $.ASN1Encoder<UpdateShadowArgument> | null = null;

/**
 * @summary Encodes a(n) UpdateShadowArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateShadowArgument, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateShadowArgument (value: UpdateShadowArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateShadowArgument) { _cached_encoder_for_UpdateShadowArgument = _get_encoder_for_OPTIONALLY_PROTECTED<{ agreementID: OPTIONAL<AgreementID>; updateTime: OPTIONAL<Time>; updateWindow: UpdateWindow; updatedInfo: OPTIONAL<RefreshInformation>; securityParameters: SecurityParameters }>($._encode_implicit(_TagClass.context, 0, () => function (value: OPTIONALLY_PROTECTED, elGetter: $.ASN1Encoder<OPTIONALLY_PROTECTED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AgreementID(value.agreementID, $.BER));
    _components.push(/* REQUIRED   */ _encode_Time(value.updateTime, $.BER));
    if (value.updateWindow !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_UpdateWindow(value.updateWindow, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_RefreshInformation(value.updatedInfo, $.BER));
    if (value.securityParameters !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SecurityParameters(value.securityParameters, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}, $.BER)); }
    return _cached_encoder_for_UpdateShadowArgument(value, elGetter);
}


/* eslint-enable */
