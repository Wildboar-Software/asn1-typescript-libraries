/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { CC_Link_Identifier, _decode_CC_Link_Identifier, _encode_CC_Link_Identifier } from "../HI2Operations/CC-Link-Identifier.ta.mjs";
// export { CC_Link_Identifier, _decode_CC_Link_Identifier, _encode_CC_Link_Identifier } from "../HI2Operations/CC-Link-Identifier.ta.mjs";
import { Direction_Indication, _decode_Direction_Indication, _encode_Direction_Indication, _enum_for_Direction_Indication } from "../HI3CCLinkData/Direction-Indication.ta.mjs";
// export { Direction_Indication, _enum_for_Direction_Indication, Direction_Indication_mono_mode /* IMPORTED_LONG_ENUMERATION_ITEM */, mono_mode /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_Indication_cc_from_target /* IMPORTED_LONG_ENUMERATION_ITEM */, cc_from_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_Indication_cc_from_other_party /* IMPORTED_LONG_ENUMERATION_ITEM */, cc_from_other_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_Indication_direction_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, direction_unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction_Indication, _encode_Direction_Indication } from "../HI3CCLinkData/Direction-Indication.ta.mjs";
import { Service_Information, _decode_Service_Information, _encode_Service_Information } from "../HI3CCLinkData/Service-Information.ta.mjs";
// export { Service_Information, _decode_Service_Information, _encode_Service_Information } from "../HI3CCLinkData/Service-Information.ta.mjs";


/**
 * @summary UUS1_Content
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UUS1-Content ::= SEQUENCE
 * {
 *     domainID                            [0] OBJECT IDENTIFIER (hi3CCLinkIdOperationId) OPTIONAL,
 *         -- Once using FTP delivery mechanism
 *     lawfullInterceptionIdentifier        [1] LawfulInterceptionIdentifier,
 *     communicationIdentifier                [2] CommunicationIdentifier,
 *     cC-Link-Identifier                    [3] CC-Link-Identifier OPTIONAL,
 *     direction-Indication                [4] Direction-Indication,
 *     bearer-capability                    [5] OCTET STRING (SIZE(1..12)) OPTIONAL,
 *         -- transport the Bearer capability information element (value part)
 *         -- Protocol: EN 300 403-1 [6]
 *     service-Information                    [7] Service-Information OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class UUS1_Content {
    constructor (
        /**
         * @summary `domainID`.
         * @public
         * @readonly
         */
        readonly domainID: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `lawfullInterceptionIdentifier`.
         * @public
         * @readonly
         */
        readonly lawfullInterceptionIdentifier: LawfulInterceptionIdentifier,
        /**
         * @summary `communicationIdentifier`.
         * @public
         * @readonly
         */
        readonly communicationIdentifier: CommunicationIdentifier,
        /**
         * @summary `cC_Link_Identifier`.
         * @public
         * @readonly
         */
        readonly cC_Link_Identifier: OPTIONAL<CC_Link_Identifier>,
        /**
         * @summary `direction_Indication`.
         * @public
         * @readonly
         */
        readonly direction_Indication: Direction_Indication,
        /**
         * @summary `bearer_capability`.
         * @public
         * @readonly
         */
        readonly bearer_capability: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `service_Information`.
         * @public
         * @readonly
         */
        readonly service_Information: OPTIONAL<Service_Information>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UUS1_Content
     * @description
     * 
     * This takes an `object` and converts it to a `UUS1_Content`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UUS1_Content`.
     * @returns {UUS1_Content}
     */
    public static _from_object (_o: { [_K in keyof (UUS1_Content)]: (UUS1_Content)[_K] }): UUS1_Content {
        return new UUS1_Content(_o.domainID, _o.lawfullInterceptionIdentifier, _o.communicationIdentifier, _o.cC_Link_Identifier, _o.direction_Indication, _o.bearer_capability, _o.service_Information, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `direction_Indication`
         * @public
         * @static
         */

    public static _enum_for_direction_Indication = _enum_for_Direction_Indication;
}

/**
 * @summary The Leading Root Component Types of UUS1_Content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UUS1_Content: $.ComponentSpec[] = [
    new $.ComponentSpec("domainID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lawfullInterceptionIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("communicationIdentifier", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cC-Link-Identifier", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("direction-Indication", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("bearer-capability", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("service-Information", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of UUS1_Content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UUS1_Content: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UUS1_Content
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UUS1_Content: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UUS1_Content: $.ASN1Decoder<UUS1_Content> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UUS1_Content
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UUS1_Content (el: _Element): UUS1_Content {
    if (!_cached_decoder_for_UUS1_Content) { _cached_decoder_for_UUS1_Content = function (el: _Element): UUS1_Content {
    let domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    let lawfullInterceptionIdentifier!: LawfulInterceptionIdentifier;
    let communicationIdentifier!: CommunicationIdentifier;
    let cC_Link_Identifier: OPTIONAL<CC_Link_Identifier>;
    let direction_Indication!: Direction_Indication;
    let bearer_capability: OPTIONAL<OCTET_STRING>;
    let service_Information: OPTIONAL<Service_Information>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "domainID": (_el: _Element): void => { domainID = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "lawfullInterceptionIdentifier": (_el: _Element): void => { lawfullInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "cC-Link-Identifier": (_el: _Element): void => { cC_Link_Identifier = $._decode_implicit<CC_Link_Identifier>(() => _decode_CC_Link_Identifier)(_el); },
        "direction-Indication": (_el: _Element): void => { direction_Indication = $._decode_implicit<Direction_Indication>(() => _decode_Direction_Indication)(_el); },
        "bearer-capability": (_el: _Element): void => { bearer_capability = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "service-Information": (_el: _Element): void => { service_Information = $._decode_implicit<Service_Information>(() => _decode_Service_Information)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UUS1_Content,
        _extension_additions_list_spec_for_UUS1_Content,
        _root_component_type_list_2_spec_for_UUS1_Content,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UUS1_Content(
        domainID,
        lawfullInterceptionIdentifier,
        communicationIdentifier,
        cC_Link_Identifier,
        direction_Indication,
        bearer_capability,
        service_Information,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UUS1_Content(el);
}

let _cached_encoder_for_UUS1_Content: $.ASN1Encoder<UUS1_Content> | null = null;

/**
 * @summary Encodes a(n) UUS1_Content into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UUS1_Content, encoded as an ASN.1 Element.
 */
export
function _encode_UUS1_Content (value: UUS1_Content, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UUS1_Content) { _cached_encoder_for_UUS1_Content = function (value: UUS1_Content, elGetter: $.ASN1Encoder<UUS1_Content>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.domainID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.domainID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfullInterceptionIdentifier, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.cC_Link_Identifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CC_Link_Identifier, $.BER)(value.cC_Link_Identifier, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Direction_Indication, $.BER)(value.direction_Indication, $.BER),
            /* IF_ABSENT  */ ((value.bearer_capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.bearer_capability, $.BER)),
            /* IF_ABSENT  */ ((value.service_Information === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Service_Information, $.BER)(value.service_Information, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UUS1_Content(value, elGetter);
}


/* eslint-enable */
