/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LCSClientExternalID, _decode_LCSClientExternalID, _encode_LCSClientExternalID } from "./LCSClientExternalID.ta.mjs";
import { LCSClientIdentity_lcsClientInternalID, _decode_LCSClientIdentity_lcsClientInternalID, _encode_LCSClientIdentity_lcsClientInternalID, _enum_for_LCSClientIdentity_lcsClientInternalID } from "./LCSClientIdentity-lcsClientInternalID.ta.mjs";


/**
 * @summary LCSClientIdentity
 * @description
 *
 * Further identification of the LCS client, present when that
 * identification is available (category C). The GMLC writes it on
 * LCS-GMO-CDR, LCS-RGMT-CDR, LCS-HGMT-CDR, LCS-VGMT-CDR, and
 * LCS-GNI-CDR. Clause 5.1 requires the GMLC to collect the identity
 * of the entity requesting the location.
 *
 * For online charging, LCS Client ID in LCS Information (category
 * Oc) holds the ID of the LCS client that invoked the location
 * request, if available.
 *
 * MO-LR: the UE obtains its own location, or has it sent to another
 * LCS client. MT-LR: an external LCS client asks for the target
 * UE's location. NI-LR: positioning for an emergency call. Clause
 * 3.1 defines an LCS client; see `LCSClientType`.
 *
 * In the CS and PS domains, TS 32.298 describes the client external
 * ID, the ID dialled by the MS, and the client internal ID. In the
 * LCS domain it is the identity defined in TS 29.002. TS 32.271
 * does not describe those components separately.
 *
 * 3GPP TS 32.271 V12.1.0 clause 5.1, clauses 5.2.3.1 to 5.2.3.3,
 * tables 6.1.3.1.1, 6.1.3.2.1.1, 6.1.3.2.2.1, 6.1.3.2.3.1, and
 * 6.1.3.3.1, and table 6.3.1.2.1.
 * 3GPP TS 32.298 V20.1.0 clauses 5.1.2.1.39, 5.1.2.2.20, and
 * 5.1.4.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSClientIdentity ::= SEQUENCE {
 *    lcsClientExternalID   [0] IMPLICIT LCSClientExternalID OPTIONAL,
 *    lcsClientDialedByMS   [1] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) OPTIONAL,
 *    lcsClientInternalID   [2] IMPLICIT ENUMERATED {
 *       broadcastService             ( 0 ),
 *       o-andM-HPLMN                 ( 1 ),
 *       o-andM-VPLMN                 ( 2 ),
 *       anonymousLocation            ( 3 ),
 *       targetMSsubscribedService    ( 4 ),
 *       ...  } OPTIONAL}
 * ```
 * 
 * @class
 */
export
class LCSClientIdentity {
    /**
     * @summary `lcsClientExternalID`.
     * @description
     *
     * Client external ID. TS 32.271 does not describe this
     * component separately from LCS Client Identity. See
     * `LCSClientExternalID`.
     *
     * 3GPP TS 32.298 V20.1.0 clauses 5.1.2.1.39, 5.1.2.2.20, and
     * 5.1.4.2.2.
     *
     * @public
     * @readonly
     */
    readonly lcsClientExternalID: OPTIONAL<LCSClientExternalID>;
    /**
     * @summary `lcsClientDialedByMS`.
     * @description
     *
     * Client dialled by the MS. TS 32.271 does not describe this
     * component separately from LCS Client Identity.
     *
     * 3GPP TS 32.298 V20.1.0 clauses 5.1.2.1.39, 5.1.2.2.20, and
     * 5.1.4.2.2.
     *
     * @public
     * @readonly
     */
    readonly lcsClientDialedByMS: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lcsClientInternalID`.
     * @description
     *
     * Client internal ID. TS 32.271 does not define the enumerated
     * values. See `LCSClientIdentity_lcsClientInternalID`.
     *
     * 3GPP TS 32.298 V20.1.0 clauses 5.1.2.1.39, 5.1.2.2.20, and
     * 5.1.4.2.2.
     *
     * @public
     * @readonly
     */
    readonly lcsClientInternalID: OPTIONAL<LCSClientIdentity_lcsClientInternalID>;

    constructor (
        lcsClientExternalID?: OPTIONAL<LCSClientExternalID>,
        lcsClientDialedByMS?: OPTIONAL<OCTET_STRING>,
        lcsClientInternalID?: OPTIONAL<LCSClientIdentity_lcsClientInternalID>
    ) {
        this.lcsClientExternalID = lcsClientExternalID;
        this.lcsClientDialedByMS = lcsClientDialedByMS;
        this.lcsClientInternalID = lcsClientInternalID;
    
        if (this.lcsClientDialedByMS !== undefined && (this.lcsClientDialedByMS.length < 1 || this.lcsClientDialedByMS.length > 20)) {
            throw new ASN1SizeError("LCSClientIdentity.lcsClientDialedByMS violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a LCSClientIdentity
     * @description
     * 
     * This takes an `object` and converts it to a `LCSClientIdentity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCSClientIdentity`.
     * @returns {LCSClientIdentity}
     */
    public static _from_object (_o: { [_K in keyof (LCSClientIdentity)]: (LCSClientIdentity)[_K] }): LCSClientIdentity {
        return new LCSClientIdentity(_o.lcsClientExternalID, _o.lcsClientDialedByMS, _o.lcsClientInternalID);
    }

        /**
         * @summary The enum used as the type of the component `lcsClientInternalID`
         * @public
         * @static
         */

    public static _enum_for_lcsClientInternalID = _enum_for_LCSClientIdentity_lcsClientInternalID;
}

/**
 * @summary The Leading Root Component Types of LCSClientIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCSClientIdentity: $.ComponentSpec[] = [
    new $.ComponentSpec("lcsClientExternalID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("lcsClientDialedByMS", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("lcsClientInternalID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of LCSClientIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCSClientIdentity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCSClientIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCSClientIdentity: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LCSClientIdentity: $.ASN1Decoder<LCSClientIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCSClientIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCSClientIdentity (el: _Element): LCSClientIdentity {
    if (!_cached_decoder_for_LCSClientIdentity) { _cached_decoder_for_LCSClientIdentity = function (el: _Element): LCSClientIdentity {
    let lcsClientExternalID: OPTIONAL<LCSClientExternalID>;
    let lcsClientDialedByMS: OPTIONAL<OCTET_STRING>;
    let lcsClientInternalID: OPTIONAL<LCSClientIdentity_lcsClientInternalID>;
    const callbacks: $.DecodingMap = {
        "lcsClientExternalID": (_el: _Element): void => { lcsClientExternalID = $._decode_implicit<LCSClientExternalID>(() => _decode_LCSClientExternalID)(_el); },
        "lcsClientDialedByMS": (_el: _Element): void => { lcsClientDialedByMS = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "lcsClientInternalID": (_el: _Element): void => { lcsClientInternalID = $._decode_implicit<LCSClientIdentity_lcsClientInternalID>(() => _decode_LCSClientIdentity_lcsClientInternalID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LCSClientIdentity,
        _extension_additions_list_spec_for_LCSClientIdentity,
        _root_component_type_list_2_spec_for_LCSClientIdentity,
        undefined,
    );
    return new LCSClientIdentity(
        lcsClientExternalID,
        lcsClientDialedByMS,
        lcsClientInternalID
    );
}; }
    return _cached_decoder_for_LCSClientIdentity(el);
}

let _cached_encoder_for_LCSClientIdentity: $.ASN1Encoder<LCSClientIdentity> | null = null;

/**
 * @summary Encodes a(n) LCSClientIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCSClientIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_LCSClientIdentity (value: LCSClientIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCSClientIdentity) { _cached_encoder_for_LCSClientIdentity = function (value: LCSClientIdentity, _elGetter: $.ASN1Encoder<LCSClientIdentity>): _Element {
    const _components: _Element[] = [];
    if (value.lcsClientExternalID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_LCSClientExternalID, $.BER)(value.lcsClientExternalID, $.BER));
    }
    if (value.lcsClientDialedByMS !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.lcsClientDialedByMS, $.BER));
    }
    if (value.lcsClientInternalID !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_LCSClientIdentity_lcsClientInternalID, $.BER)(value.lcsClientInternalID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_LCSClientIdentity(value, elGetter);
}


/* eslint-enable */
