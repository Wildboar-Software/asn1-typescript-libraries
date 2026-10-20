/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LCSClientIdentity_lcsClientExternalID, _decode_LCSClientIdentity_lcsClientExternalID, _encode_LCSClientIdentity_lcsClientExternalID } from "../GenericChargingDataTypes/LCSClientIdentity-lcsClientExternalID.ta.mjs";
import { LCSClientIdentity_lcsClientInternalID, _decode_LCSClientIdentity_lcsClientInternalID, _encode_LCSClientIdentity_lcsClientInternalID, _enum_for_LCSClientIdentity_lcsClientInternalID } from "../GenericChargingDataTypes/LCSClientIdentity-lcsClientInternalID.ta.mjs";


/**
 * @summary LCSClientIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCSClientIdentity ::= SEQUENCE {
 *    lcsClientExternalID   [0] IMPLICIT SEQUENCE {
 *       externalAddress      [0] IMPLICIT OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) ) OPTIONAL,
 *       extensionContainer   [1] IMPLICIT SEQUENCE {
 *          privateExtensionList   [0] IMPLICIT SEQUENCE  ( SIZE( 1 .. 10 ) ) OF
 *             SEQUENCE {
 *                extId      MAP-EXTENSION.&extensionId ({ExtensionSet}) ,
 *                extType    MAP-EXTENSION.&ExtensionType ({ExtensionSet}{@extId})  OPTIONAL} OPTIONAL,
 *          pcs-Extensions         [1] IMPLICIT SEQUENCE {
 *             ... } OPTIONAL,
 *          ... } OPTIONAL,
 *       ... } OPTIONAL,
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
     * @public
     * @readonly
     */
    readonly lcsClientExternalID: OPTIONAL<LCSClientIdentity_lcsClientExternalID>;
    /**
     * @summary `lcsClientDialedByMS`.
     * @public
     * @readonly
     */
    readonly lcsClientDialedByMS: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `lcsClientInternalID`.
     * @public
     * @readonly
     */
    readonly lcsClientInternalID: OPTIONAL<LCSClientIdentity_lcsClientInternalID>;

    constructor (
        lcsClientExternalID: OPTIONAL<LCSClientIdentity_lcsClientExternalID>,
        lcsClientDialedByMS: OPTIONAL<OCTET_STRING>,
        lcsClientInternalID: OPTIONAL<LCSClientIdentity_lcsClientInternalID>
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
    let lcsClientExternalID: OPTIONAL<LCSClientIdentity_lcsClientExternalID>;
    let lcsClientDialedByMS: OPTIONAL<OCTET_STRING>;
    let lcsClientInternalID: OPTIONAL<LCSClientIdentity_lcsClientInternalID>;
    const callbacks: $.DecodingMap = {
        "lcsClientExternalID": (_el: _Element): void => { lcsClientExternalID = $._decode_implicit<LCSClientIdentity_lcsClientExternalID>(() => _decode_LCSClientIdentity_lcsClientExternalID)(_el); },
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
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_LCSClientIdentity_lcsClientExternalID, $.BER)(value.lcsClientExternalID, $.BER));
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
