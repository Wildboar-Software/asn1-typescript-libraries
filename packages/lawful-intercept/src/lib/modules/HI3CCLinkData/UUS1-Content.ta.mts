/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Error,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { hi3CCLinkIdOperationId } from "../HI3CCLinkData/hi3CCLinkIdOperationId.va.mjs";
import { type LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { type CC_Link_Identifier, _decode_CC_Link_Identifier, _encode_CC_Link_Identifier } from "../HI2Operations/CC-Link-Identifier.ta.mjs";
// export { CC_Link_Identifier, _decode_CC_Link_Identifier, _encode_CC_Link_Identifier } from "../HI2Operations/CC-Link-Identifier.ta.mjs";
import { type Direction_Indication, _decode_Direction_Indication, _encode_Direction_Indication, _enum_for_Direction_Indication } from "../HI3CCLinkData/Direction-Indication.ta.mjs";
// export { Direction_Indication, _enum_for_Direction_Indication, Direction_Indication_mono_mode /* IMPORTED_LONG_ENUMERATION_ITEM */, mono_mode /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_Indication_cc_from_target /* IMPORTED_LONG_ENUMERATION_ITEM */, cc_from_target /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_Indication_cc_from_other_party /* IMPORTED_LONG_ENUMERATION_ITEM */, cc_from_other_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_Indication_direction_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, direction_unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction_Indication, _encode_Direction_Indication } from "../HI3CCLinkData/Direction-Indication.ta.mjs";
import { Service_Information, _decode_Service_Information, _encode_Service_Information } from "../HI3CCLinkData/Service-Information.ta.mjs";
// export { Service_Information, _decode_Service_Information, _encode_Service_Information } from "../HI3CCLinkData/Service-Information.ta.mjs";


/**
 * @summary UUS1_Content
 * @description
 *
 * LI control information in the User-to-User service 1 parameter of a
 * circuit-switched CC link. Carried at call set-up in the ISUP IAM (EN 300 356)
 * or the DSS1 SETUP (EN 300 403-1), and delivered unchanged to the LEMF.
 *
 * Table A.4.1 requires the LIID, the communication identifier, the direction,
 * and, when required, the CC-link identifier. The two stereo links carry the
 * same values except the direction. The CC link is a one-way 64 kbit/s
 * unrestricted bearer from the mediation function to the LEMF; the direction
 * toward the mediation function is not switched through. For one bi-directional
 * target call, two delivery calls are set up: one toward the target and one
 * from the target. The network that transmits the CC links shall support a UUS1
 * parameter of 131 octets. ISUP does not discard UUS1 for length, because the
 * services used on these links do not make the message exceed the maximum.
 *
 * If a network does not support UUS1, or supports only 32 octets rather than
 * 128, annex E carries correlation in the calling-party and called-party
 * subaddresses. That procedure is not used when every network involved supports
 * 128 octets of UUS1.
 *
 * UUS1, UUS2, and UUS3 user-to-user parameters are reported as HI3 or via HI2
 * (clause A.6.22). The ROSE operation for UUS associated with a circuit call is
 * `circuit-Call-related-Services`. This type is the UUS1 element on the CC-link
 * set-up.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3, clause A.4.1,
 * clause A.6.22, clause E.1.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
    /**
     * @summary `domainID`.
     * @description
     *
     * Used when the FTP delivery mechanism is used. Constrained to
     * `hi3CCLinkIdOperationId`. Clause D.8 does not say that the CC link itself
     * is an FTP transfer; the comment is on this component.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `lawfullInterceptionIdentifier`.
     * @description
     *
     * LIID of the target identity (clause 6.1, table A.4.1 item 2). The
     * double-l spelling is the one assigned in clause D.8. Alphanumeric, or a
     * digit string for the subaddress option (annex E).
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3, clause 6.1.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly lawfullInterceptionIdentifier: LawfulInterceptionIdentifier;
    /**
     * @summary `communicationIdentifier`.
     * @description
     *
     * Communication identifier of this call of the target (clause 6.2, table
     * A.4.1 item 3). The same value is present in the IRI (clause A.4.3). It is
     * the network identifier plus an optional communication identity number,
     * and it correlates IRI with the CC links.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3, clause 6.2.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly communicationIdentifier: CommunicationIdentifier;
    /**
     * @summary `cC_Link_Identifier`.
     * @description
     *
     * Used at HI2 and HI3 when CC links are reused (option B). For each CC link
     * toward the LEMF, the CCLID is sent with the CIN and the NID so that a
     * multiparty call's IRI shows which link carries the content. It may use
     * the same format as the CIN. In that case it need not be sent on HI3,
     * because the CIN may stand for the CCLID. Table A.1.1 note 2: it may be
     * omitted. Optional here.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
     * clause A.1.1, clause A.1.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly cC_Link_Identifier: OPTIONAL<CC_Link_Identifier>;
    /**
     * @summary `direction_Indication`.
     * @description
     *
     * From the target, toward the target, or combined. In stereo the two CC
     * links differ only in this value. Parameter 5 of table A.4.1.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
     * clause E.4.1.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly direction_Indication: Direction_Indication;
    /**
     * @summary `bearer_capability`.
     * @description
     *
     * Bearer capability information element of the target call, value part
     * only. Protocol: EN 300 403-1. Tells the LEMF the basic service in use,
     * for example so speech can be compressed for storage. Length 1 to 12
     * octets. The CC link itself is 64 kbit/s unrestricted and requires no
     * specific high-layer compatibility. This document does not restate EN 300
     * 403-1.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8, clause A.4.3,
     * clause A.4.1.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly bearer_capability: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `service_Information`.
     * @description
     *
     * Further service octets for the target call. See `Service-Information`.
     * Optional. The module does not say when it is included.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly service_Information: OPTIONAL<Service_Information>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * An unrecognized parameter is ignored and processing of the record
     * continues. No special error or alarm is required, because the cause may
     * be a newer version of the specification. Content that is not recognized
     * is also ignored; the LEMF may raise an alarm. A record that cannot be
     * decoded is rejected when ROSE is used, or ignored.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), annex G, clause C.1.2.4, clause D.8.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        domainID: OPTIONAL<OBJECT_IDENTIFIER>,
        lawfullInterceptionIdentifier: LawfulInterceptionIdentifier,
        communicationIdentifier: CommunicationIdentifier,
        cC_Link_Identifier: OPTIONAL<CC_Link_Identifier>,
        direction_Indication: Direction_Indication,
        bearer_capability?: OPTIONAL<OCTET_STRING>,
        service_Information?: OPTIONAL<Service_Information>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.domainID = domainID;
        this.lawfullInterceptionIdentifier = lawfullInterceptionIdentifier;
        this.communicationIdentifier = communicationIdentifier;
        this.cC_Link_Identifier = cC_Link_Identifier;
        this.direction_Indication = direction_Indication;
        this.bearer_capability = bearer_capability;
        this.service_Information = service_Information;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "domainID": (_el: _Element): void => {
            domainID = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el);
            if (!domainID.isEqualTo(hi3CCLinkIdOperationId)) {
                throw new ASN1Error("UUS1_Content.domainID violates OBJECT IDENTIFIER constraint");
            }
        },
        "lawfullInterceptionIdentifier": (_el: _Element): void => { lawfullInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "cC-Link-Identifier": (_el: _Element): void => { cC_Link_Identifier = $._decode_implicit<CC_Link_Identifier>(() => _decode_CC_Link_Identifier)(_el); },
        "direction-Indication": (_el: _Element): void => { direction_Indication = $._decode_implicit<Direction_Indication>(() => _decode_Direction_Indication)(_el); },
        "bearer-capability": (_el: _Element): void => {
            bearer_capability = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (bearer_capability.length < 1 || bearer_capability.length > 12) {
                throw new ASN1SizeError("UUS1_Content.bearer_capability violates SIZE constraint");
            }
        },
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.domainID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.domainID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfullInterceptionIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER);
    if (value.cC_Link_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CC_Link_Identifier, $.BER)(value.cC_Link_Identifier, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_Direction_Indication, $.BER)(value.direction_Indication, $.BER);
    if (value.bearer_capability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.bearer_capability, $.BER);
    }
    if (value.service_Information !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Service_Information, $.BER)(value.service_Information, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UUS1_Content(value, elGetter);
}


/* eslint-enable */
