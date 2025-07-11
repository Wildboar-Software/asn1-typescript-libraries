/* eslint-disable */
import {
    OPTIONAL,
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
import { type GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "@wildboar/x500/CertificateExtensions";
import { IssuerSerial, _decode_IssuerSerial, _encode_IssuerSerial } from "@wildboar/x500/AttributeCertificateDefinitions";
import { ObjectDigestInfo, _decode_ObjectDigestInfo, _encode_ObjectDigestInfo } from "@wildboar/x500/AttributeCertificateDefinitions";

/**
 * @summary BioTempIssuer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BioTempIssuer ::= [0]  SEQUENCE {
 *   issuerName         GeneralNames OPTIONAL,
 *   baseCertificateID  [0]  IssuerSerial OPTIONAL,
 *   objectDigestInfo   [1]  ObjectDigestInfo OPTIONAL -- [b-ISO-IEC-TR-24741] --
 * }
 * ```
 * 
 */
export
class BioTempIssuer {
    constructor (
        /**
         * @summary `issuerName`.
         * @public
         * @readonly
         */
        readonly issuerName: OPTIONAL<GeneralNames>,
        /**
         * @summary `baseCertificateID`.
         * @public
         * @readonly
         */
        readonly baseCertificateID: OPTIONAL<IssuerSerial>,
        /**
         * @summary `objectDigestInfo`.
         * @public
         * @readonly
         */
        readonly objectDigestInfo: OPTIONAL<ObjectDigestInfo>
    ) {}

    /**
     * @summary Restructures an object into a BioTempIssuer
     * @description
     * 
     * This takes an `object` and converts it to a `BioTempIssuer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BioTempIssuer`.
     * @returns {BioTempIssuer}
     */
    public static _from_object (_o: { [_K in keyof (BioTempIssuer)]: (BioTempIssuer)[_K] }): BioTempIssuer {
        return new BioTempIssuer(_o.issuerName, _o.baseCertificateID, _o.objectDigestInfo);
    }


}

/**
 * @summary The Leading Root Component Types of BioTempIssuer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BioTempIssuer: $.ComponentSpec[] = [
    new $.ComponentSpec("issuerName", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("baseCertificateID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("objectDigestInfo", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of BioTempIssuer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BioTempIssuer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BioTempIssuer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BioTempIssuer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BioTempIssuer: $.ASN1Decoder<BioTempIssuer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BioTempIssuer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioTempIssuer} The decoded data structure.
 */
export
function _decode_BioTempIssuer (el: _Element): BioTempIssuer {
    if (!_cached_decoder_for_BioTempIssuer) { _cached_decoder_for_BioTempIssuer = $._decode_implicit<BioTempIssuer>(() => function (el: _Element): BioTempIssuer {
    let issuerName: OPTIONAL<GeneralNames>;
    let baseCertificateID: OPTIONAL<IssuerSerial>;
    let objectDigestInfo: OPTIONAL<ObjectDigestInfo>;
    const callbacks: $.DecodingMap = {
        "issuerName": (_el: _Element): void => { issuerName = _decode_GeneralNames(_el); },
        "baseCertificateID": (_el: _Element): void => { baseCertificateID = $._decode_implicit<IssuerSerial>(() => _decode_IssuerSerial)(_el); },
        "objectDigestInfo": (_el: _Element): void => { objectDigestInfo = $._decode_implicit<ObjectDigestInfo>(() => _decode_ObjectDigestInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BioTempIssuer,
        _extension_additions_list_spec_for_BioTempIssuer,
        _root_component_type_list_2_spec_for_BioTempIssuer,
        undefined,
    );
    return new BioTempIssuer( 
        issuerName,
        baseCertificateID,
        objectDigestInfo
    );
}); }
    return _cached_decoder_for_BioTempIssuer(el);
}

let _cached_encoder_for_BioTempIssuer: $.ASN1Encoder<BioTempIssuer> | null = null;

/**
 * @summary Encodes a(n) BioTempIssuer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioTempIssuer, encoded as an ASN.1 Element.
 */
export
function _encode_BioTempIssuer (value: BioTempIssuer, elGetter: $.ASN1Encoder<BioTempIssuer>): _Element {
    if (!_cached_encoder_for_BioTempIssuer) { _cached_encoder_for_BioTempIssuer = $._encode_implicit(_TagClass.context, 0, () => function (value: BioTempIssuer): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.issuerName === undefined) ? undefined : _encode_GeneralNames(value.issuerName, $.BER)),
            /* IF_ABSENT  */ ((value.baseCertificateID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_IssuerSerial, $.BER)(value.baseCertificateID, $.BER)),
            /* IF_ABSENT  */ ((value.objectDigestInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ObjectDigestInfo, $.BER)(value.objectDigestInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_BioTempIssuer(value, elGetter);
}


/* eslint-enable */
