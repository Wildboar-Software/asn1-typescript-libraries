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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AttCertVersion,
    _decode_AttCertVersion,
    _encode_AttCertVersion,
} from "../PKI-Stub/AttCertVersion.ta.mjs";
import { Holder, _decode_Holder, _encode_Holder } from "../PKI-Stub/Holder.ta.mjs";
import {
    AttCertIssuer,
    _decode_AttCertIssuer,
    _encode_AttCertIssuer,
} from "../PKI-Stub/AttCertIssuer.ta.mjs";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI-Stub/AlgorithmIdentifier.ta.mjs";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../PKI-Stub/CertificateSerialNumber.ta.mjs";
import {
    AttCertValidityPeriod,
    _decode_AttCertValidityPeriod,
    _encode_AttCertValidityPeriod,
} from "../PKI-Stub/AttCertValidityPeriod.ta.mjs";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../PKI-Stub/Attribute.ta.mjs";
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../PKI-Stub/UniqueIdentifier.ta.mjs";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "../PKI-Stub/Extensions.ta.mjs";

/* START_OF_SYMBOL_DEFINITION TBSAttributeCertificate */
/**
 * @summary TBSAttributeCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSAttributeCertificate ::= SEQUENCE {
 *   version                 AttCertVersion, -- version is v2
 *   holder                  Holder,
 *   issuer                  AttCertIssuer,
 *   signature               AlgorithmIdentifier{{SupportedAlgorithms}},
 *   serialNumber            CertificateSerialNumber,
 *   attrCertValidityPeriod  AttCertValidityPeriod,
 *   attributes              SEQUENCE OF Attribute{{SupportedAttributes}},
 *   issuerUniqueID          UniqueIdentifier OPTIONAL,
 *   ...,
 *   ...,
 *   extensions              Extensions OPTIONAL
 *  }  (CONSTRAINED BY { -- shall be DER encoded -- } )
 * ```
 *
 * @class
 */
export class TBSAttributeCertificate {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: AttCertVersion,
        /**
         * @summary `holder`.
         * @public
         * @readonly
         */
        readonly holder: Holder,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: AttCertIssuer,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: AlgorithmIdentifier,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `attrCertValidityPeriod`.
         * @public
         * @readonly
         */
        readonly attrCertValidityPeriod: AttCertValidityPeriod,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: Attribute[],
        /**
         * @summary `issuerUniqueID`.
         * @public
         * @readonly
         */
        readonly issuerUniqueID?: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions?: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TBSAttributeCertificate
     * @description
     *
     * This takes an `object` and converts it to a `TBSAttributeCertificate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSAttributeCertificate`.
     * @returns {TBSAttributeCertificate}
     */
    public static _from_object(
        _o: {
            [_K in keyof TBSAttributeCertificate]: TBSAttributeCertificate[_K];
        }
    ): TBSAttributeCertificate {
        return new TBSAttributeCertificate(
            _o.version,
            _o.holder,
            _o.issuer,
            _o.signature,
            _o.serialNumber,
            _o.attrCertValidityPeriod,
            _o.attributes,
            _o.issuerUniqueID,
            _o._unrecognizedExtensionsList,
            _o.extensions
        );
    }
}
/* END_OF_SYMBOL_DEFINITION TBSAttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSAttributeCertificate */
/**
 * @summary The Leading Root Component Types of TBSAttributeCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TBSAttributeCertificate: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "version",
            false,
            $.hasTag(_TagClass.universal, 2),
            undefined,
            undefined
        ),
        new $.ComponentSpec(
            "holder",
            false,
            $.hasTag(_TagClass.universal, 16),
            undefined,
            undefined
        ),
        new $.ComponentSpec(
            "issuer",
            false,
            $.hasTag(_TagClass.context, 0),
            undefined,
            undefined
        ),
        new $.ComponentSpec(
            "signature",
            false,
            $.hasTag(_TagClass.universal, 16),
            undefined,
            undefined
        ),
        new $.ComponentSpec(
            "serialNumber",
            false,
            $.hasTag(_TagClass.universal, 2),
            undefined,
            undefined
        ),
        new $.ComponentSpec(
            "attrCertValidityPeriod",
            false,
            $.hasTag(_TagClass.universal, 16),
            undefined,
            undefined
        ),
        new $.ComponentSpec(
            "attributes",
            false,
            $.hasTag(_TagClass.universal, 16),
            undefined,
            undefined
        ),
        new $.ComponentSpec(
            "issuerUniqueID",
            true,
            $.hasTag(_TagClass.universal, 3),
            undefined,
            undefined
        ),
    ];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TBSAttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSAttributeCertificate */
/**
 * @summary The Trailing Root Component Types of TBSAttributeCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TBSAttributeCertificate: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "extensions",
            true,
            $.hasTag(_TagClass.universal, 16),
            undefined,
            undefined
        ),
    ];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TBSAttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSAttributeCertificate */
/**
 * @summary The Extension Addition Component Types of TBSAttributeCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TBSAttributeCertificate: $.ComponentSpec[] =
    [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TBSAttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _decode_TBSAttributeCertificate */
/**
 * @summary Decodes an ASN.1 element into a(n) TBSAttributeCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSAttributeCertificate} The decoded data structure.
 */
export function _decode_TBSAttributeCertificate(el: _Element) {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let version!: AttCertVersion;
    let holder!: Holder;
    let issuer!: AttCertIssuer;
    let signature!: AlgorithmIdentifier;
    let serialNumber!: CertificateSerialNumber;
    let attrCertValidityPeriod!: AttCertValidityPeriod;
    let attributes!: Attribute[];
    let issuerUniqueID: OPTIONAL<UniqueIdentifier>;
    let _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        version: (_el: _Element): void => {
            version = _decode_AttCertVersion(_el);
        },
        holder: (_el: _Element): void => {
            holder = _decode_Holder(_el);
        },
        issuer: (_el: _Element): void => {
            issuer = _decode_AttCertIssuer(_el);
        },
        signature: (_el: _Element): void => {
            signature = _decode_AlgorithmIdentifier(_el);
        },
        serialNumber: (_el: _Element): void => {
            serialNumber = _decode_CertificateSerialNumber(_el);
        },
        attrCertValidityPeriod: (_el: _Element): void => {
            attrCertValidityPeriod = _decode_AttCertValidityPeriod(_el);
        },
        attributes: (_el: _Element): void => {
            attributes = $._decodeSequenceOf<Attribute>(
                () => _decode_Attribute
            )(_el);
        },
        issuerUniqueID: (_el: _Element): void => {
            issuerUniqueID = _decode_UniqueIdentifier(_el);
        },
        extensions: (_el: _Element): void => {
            extensions = _decode_Extensions(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_TBSAttributeCertificate,
        _extension_additions_list_spec_for_TBSAttributeCertificate,
        _root_component_type_list_2_spec_for_TBSAttributeCertificate,
        (ext: _Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new TBSAttributeCertificate(
        /* SEQUENCE_CONSTRUCTOR_CALL */ version,
        holder,
        issuer,
        signature,
        serialNumber,
        attrCertValidityPeriod,
        attributes,
        issuerUniqueID,
        _unrecognizedExtensionsList,
        extensions
    );
}
/* END_OF_SYMBOL_DEFINITION _decode_TBSAttributeCertificate */

/* START_OF_SYMBOL_DEFINITION _encode_TBSAttributeCertificate */
/**
 * @summary Encodes a(n) TBSAttributeCertificate into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSAttributeCertificate, encoded as an ASN.1 Element.
 */
export function _encode_TBSAttributeCertificate(
    value: TBSAttributeCertificate,
    elGetter: $.ASN1Encoder<TBSAttributeCertificate>
) {
    const components: _Element[] = [
        /* REQUIRED   */ _encode_AttCertVersion(
            value.version,
            $.BER
        ),
        /* REQUIRED   */ _encode_Holder(
            value.holder,
            $.BER
        ),
        /* REQUIRED   */ _encode_AttCertIssuer(
            value.issuer,
            $.BER
        ),
        /* REQUIRED   */ _encode_AlgorithmIdentifier(
            value.signature,
            $.BER
        ),
        /* REQUIRED   */ _encode_CertificateSerialNumber(
            value.serialNumber,
            $.BER
        ),
        /* REQUIRED   */ _encode_AttCertValidityPeriod(
            value.attrCertValidityPeriod,
            $.BER
        ),
        /* REQUIRED   */ $._encodeSequenceOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        )(value.attributes, $.BER),
    ];
    if (value.issuerUniqueID) {
        components.push(_encode_UniqueIdentifier(value.issuerUniqueID, $.BER));
    }
    components.push(...value._unrecognizedExtensionsList ?? []);
    if (value.extensions?.length) {
        components.push(_encode_Extensions(value.extensions, $.BER));
    }
    return $._encodeSequence(components, $.BER);
}

/* END_OF_SYMBOL_DEFINITION _encode_TBSAttributeCertificate */

/* eslint-enable */
