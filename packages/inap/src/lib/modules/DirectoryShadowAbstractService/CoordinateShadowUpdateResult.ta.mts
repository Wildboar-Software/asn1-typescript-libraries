/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PROTECTED, _get_decoder_for_PROTECTED, _get_encoder_for_PROTECTED } from "../Notation/PROTECTED.ta.mjs";
// export { PROTECTED, _get_decoder_for_PROTECTED, _get_encoder_for_PROTECTED } from "../Notation/PROTECTED.ta.mjs";
import { AgreementID, _decode_AgreementID, _encode_AgreementID } from "../DirectoryShadowAbstractService/AgreementID.ta.mjs";
// export { AgreementID, _decode_AgreementID, _encode_AgreementID } from "../DirectoryShadowAbstractService/AgreementID.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../DirectoryShadowAbstractService/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../DirectoryShadowAbstractService/Time.ta.mjs";
import { CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";
// export { CommonResults, _decode_CommonResults, _encode_CommonResults } from "../DirectoryAbstractService/CommonResults.ta.mjs";


/**
 * @summary CoordinateShadowUpdateResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CoordinateShadowUpdateResult  ::=  CHOICE {
 *   null         NULL,
 *   information
 *     PROTECTED{SET {agreementID  AgreementID,
 *                    lastUpdate   Time OPTIONAL,
 *                    COMPONENTS OF CommonResults
 *       }, dirqop.&dispCoorShadowRes-QOP}
 * }
 * ```
 */
export
type CoordinateShadowUpdateResult =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { information: PROTECTED<{ agreementID: OPTIONAL<AgreementID>; lastUpdate: Time; _componentsOf: CommonResults }> } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CoordinateShadowUpdateResult: $.ASN1Decoder<CoordinateShadowUpdateResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CoordinateShadowUpdateResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CoordinateShadowUpdateResult (el: _Element): CoordinateShadowUpdateResult {
    if (!_cached_decoder_for_CoordinateShadowUpdateResult) { _cached_decoder_for_CoordinateShadowUpdateResult = $._decode_inextensible_choice<CoordinateShadowUpdateResult>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "UNIVERSAL 3": [ "information", _get_decoder_for_PROTECTED<{ agreementID: OPTIONAL<AgreementID>; lastUpdate: Time; _componentsOf: CommonResults }>(function (el: _Element): PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let agreementID!: AgreementID;
    let lastUpdate: OPTIONAL<Time>;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "agreementID": (_el: _Element): void => { agreementID = _decode_AgreementID(_el); },
        "lastUpdate": (_el: _Element): void => { lastUpdate = _decode_Time(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PROTECTED,
        _extension_additions_list_spec_for_PROTECTED,
        _root_component_type_list_2_spec_for_PROTECTED,
        undefined,
    );
    return new PROTECTED( /* SET_CONSTRUCTOR_CALL */
        agreementID,
        lastUpdate,
        _componentsOf
    );
}) ],
    "UNIVERSAL 16": [ "information", _get_decoder_for_PROTECTED<{ agreementID: OPTIONAL<AgreementID>; lastUpdate: Time; _componentsOf: CommonResults }>(function (el: _Element): PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let agreementID!: AgreementID;
    let lastUpdate: OPTIONAL<Time>;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "agreementID": (_el: _Element): void => { agreementID = _decode_AgreementID(_el); },
        "lastUpdate": (_el: _Element): void => { lastUpdate = _decode_Time(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PROTECTED,
        _extension_additions_list_spec_for_PROTECTED,
        _root_component_type_list_2_spec_for_PROTECTED,
        undefined,
    );
    return new PROTECTED( /* SET_CONSTRUCTOR_CALL */
        agreementID,
        lastUpdate,
        _componentsOf
    );
}) ],
    "CONTEXT 0": [ "information", _get_decoder_for_PROTECTED<{ agreementID: OPTIONAL<AgreementID>; lastUpdate: Time; _componentsOf: CommonResults }>(function (el: _Element): PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let agreementID!: AgreementID;
    let lastUpdate: OPTIONAL<Time>;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "agreementID": (_el: _Element): void => { agreementID = _decode_AgreementID(_el); },
        "lastUpdate": (_el: _Element): void => { lastUpdate = _decode_Time(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PROTECTED,
        _extension_additions_list_spec_for_PROTECTED,
        _root_component_type_list_2_spec_for_PROTECTED,
        undefined,
    );
    return new PROTECTED( /* SET_CONSTRUCTOR_CALL */
        agreementID,
        lastUpdate,
        _componentsOf
    );
}) ],
    "CONTEXT 1": [ "information", _get_decoder_for_PROTECTED<{ agreementID: OPTIONAL<AgreementID>; lastUpdate: Time; _componentsOf: CommonResults }>(function (el: _Element): PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let agreementID!: AgreementID;
    let lastUpdate: OPTIONAL<Time>;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "agreementID": (_el: _Element): void => { agreementID = _decode_AgreementID(_el); },
        "lastUpdate": (_el: _Element): void => { lastUpdate = _decode_Time(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PROTECTED,
        _extension_additions_list_spec_for_PROTECTED,
        _root_component_type_list_2_spec_for_PROTECTED,
        undefined,
    );
    return new PROTECTED( /* SET_CONSTRUCTOR_CALL */
        agreementID,
        lastUpdate,
        _componentsOf
    );
}) ],
    "CONTEXT 2": [ "information", _get_decoder_for_PROTECTED<{ agreementID: OPTIONAL<AgreementID>; lastUpdate: Time; _componentsOf: CommonResults }>(function (el: _Element): PROTECTED {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let agreementID!: AgreementID;
    let lastUpdate: OPTIONAL<Time>;
    let _componentsOf!: CommonResults;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "agreementID": (_el: _Element): void => { agreementID = _decode_AgreementID(_el); },
        "lastUpdate": (_el: _Element): void => { lastUpdate = _decode_Time(_el); },
        /* COULD_NOT_GENERATE_CALLBACK_FOR_COMPONENTS_OF */
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_PROTECTED,
        _extension_additions_list_spec_for_PROTECTED,
        _root_component_type_list_2_spec_for_PROTECTED,
        undefined,
    );
    return new PROTECTED( /* SET_CONSTRUCTOR_CALL */
        agreementID,
        lastUpdate,
        _componentsOf
    );
}) ]
}); }
    return _cached_decoder_for_CoordinateShadowUpdateResult(el);
}

let _cached_encoder_for_CoordinateShadowUpdateResult: $.ASN1Encoder<CoordinateShadowUpdateResult> | null = null;

/**
 * @summary Encodes a(n) CoordinateShadowUpdateResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CoordinateShadowUpdateResult, encoded as an ASN.1 Element.
 */
export
function _encode_CoordinateShadowUpdateResult (value: CoordinateShadowUpdateResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CoordinateShadowUpdateResult) { _cached_encoder_for_CoordinateShadowUpdateResult = $._encode_choice<CoordinateShadowUpdateResult>({
    "null_": $._encodeNull,
    "information": _get_encoder_for_PROTECTED<{ agreementID: OPTIONAL<AgreementID>; lastUpdate: Time; _componentsOf: CommonResults }>(function (value: PROTECTED, elGetter: $.ASN1Encoder<PROTECTED>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AgreementID(value.agreementID, $.BER));
    if (value.lastUpdate !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Time(value.lastUpdate, $.BER));
    }
    /* FIXME: COULD_NOT_COMPILE_COMPONENTS_OF DefinedType */
    return $._encodeSet(_components, $.BER);
}),
}, $.BER); }
    return _cached_encoder_for_CoordinateShadowUpdateResult(value, elGetter);
}


/* eslint-enable */
