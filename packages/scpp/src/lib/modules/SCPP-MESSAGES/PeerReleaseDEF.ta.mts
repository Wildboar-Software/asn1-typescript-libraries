/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PeerReleaseDEF_peerRelease, _enum_for_PeerReleaseDEF_peerRelease, _decode_PeerReleaseDEF_peerRelease, _encode_PeerReleaseDEF_peerRelease } from "../SCPP-MESSAGES/PeerReleaseDEF-peerRelease.ta.mjs";


/**
 * @summary PeerReleaseDEF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PeerReleaseDEF ::= SEQUENCE {
 *   peerRelease      ENUMERATED {request(0), confirm(1)},
 *   nonStandardData  OCTET STRING OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class PeerReleaseDEF {
    constructor (
        /**
         * @summary `peerRelease`.
         * @public
         * @readonly
         */
        readonly peerRelease: PeerReleaseDEF_peerRelease,
        /**
         * @summary `nonStandardData`.
         * @public
         * @readonly
         */
        readonly nonStandardData: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PeerReleaseDEF
     * @description
     * 
     * This takes an `object` and converts it to a `PeerReleaseDEF`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PeerReleaseDEF`.
     * @returns {PeerReleaseDEF}
     */
    public static _from_object (_o: { [_K in keyof (PeerReleaseDEF)]: (PeerReleaseDEF)[_K] }): PeerReleaseDEF {
        return new PeerReleaseDEF(_o.peerRelease, _o.nonStandardData, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `peerRelease`
         * @public
         * @static
         */

    public static _enum_for_peerRelease = _enum_for_PeerReleaseDEF_peerRelease;
}

/**
 * @summary The Leading Root Component Types of PeerReleaseDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PeerReleaseDEF: $.ComponentSpec[] = [
    new $.ComponentSpec("peerRelease", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("nonStandardData", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PeerReleaseDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PeerReleaseDEF: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PeerReleaseDEF
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PeerReleaseDEF: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PeerReleaseDEF: $.ASN1Decoder<PeerReleaseDEF> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PeerReleaseDEF
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PeerReleaseDEF (el: _Element): PeerReleaseDEF {
    if (!_cached_decoder_for_PeerReleaseDEF) { _cached_decoder_for_PeerReleaseDEF = function (el: _Element): PeerReleaseDEF {
    let peerRelease!: PeerReleaseDEF_peerRelease;
    let nonStandardData: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "peerRelease": (_el: _Element): void => { peerRelease = _decode_PeerReleaseDEF_peerRelease(_el); },
        "nonStandardData": (_el: _Element): void => { nonStandardData = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PeerReleaseDEF,
        _extension_additions_list_spec_for_PeerReleaseDEF,
        _root_component_type_list_2_spec_for_PeerReleaseDEF,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PeerReleaseDEF(
        peerRelease,
        nonStandardData,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PeerReleaseDEF(el);
}

let _cached_encoder_for_PeerReleaseDEF: $.ASN1Encoder<PeerReleaseDEF> | null = null;

/**
 * @summary Encodes a(n) PeerReleaseDEF into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PeerReleaseDEF, encoded as an ASN.1 Element.
 */
export
function _encode_PeerReleaseDEF (value: PeerReleaseDEF, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PeerReleaseDEF) { _cached_encoder_for_PeerReleaseDEF = function (value: PeerReleaseDEF): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PeerReleaseDEF_peerRelease, $.BER)(value.peerRelease, $.BER),
            /* IF_ABSENT  */ ((value.nonStandardData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.nonStandardData, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PeerReleaseDEF(value, elGetter);
}


/* eslint-enable */
