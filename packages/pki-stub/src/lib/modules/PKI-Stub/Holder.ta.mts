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
} from "jsr:@wildboar/asn1@11";
import * as $ from "jsr:@wildboar/asn1@11/functional";
import {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "../PKI-Stub/IssuerSerial.ta.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../PKI-Stub/GeneralNames.ta.mjs";
import {
    ObjectDigestInfo,
    _decode_ObjectDigestInfo,
    _encode_ObjectDigestInfo,
} from "../PKI-Stub/ObjectDigestInfo.ta.mjs";

/**
 * @summary Holder
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Holder ::= SEQUENCE {
 *   baseCertificateID  [0]  IssuerSerial OPTIONAL,
 *   entityName         [1]  GeneralNames OPTIONAL,
 *   objectDigestInfo   [2]  ObjectDigestInfo OPTIONAL }
 *   (WITH COMPONENTS {..., baseCertificateID  PRESENT } |
 *    WITH COMPONENTS {..., entityName  PRESENT } |
 *    WITH COMPONENTS {..., objectDigestInfo  PRESENT } )
 * ```
 *
 * @class
 */
export class Holder {
    constructor(
        /**
         * @summary `baseCertificateID`.
         * @public
         * @readonly
         */
        readonly baseCertificateID?: OPTIONAL<IssuerSerial>,
        /**
         * @summary `entityName`.
         * @public
         * @readonly
         */
        readonly entityName?: OPTIONAL<GeneralNames>,
        /**
         * @summary `objectDigestInfo`.
         * @public
         * @readonly
         */
        readonly objectDigestInfo?: OPTIONAL<ObjectDigestInfo>
    ) {}

    /**
     * @summary Restructures an object into a Holder
     * @description
     *
     * This takes an `object` and converts it to a `Holder`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Holder`.
     * @returns {Holder}
     */
    public static _from_object(
        _o: { [_K in keyof Holder]: Holder[_K] }
    ): Holder {
        return new Holder(
            _o.baseCertificateID,
            _o.entityName,
            _o.objectDigestInfo
        );
    }
}

/**
 * @summary The Leading Root Component Types of Holder
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Holder: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "baseCertificateID",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "entityName",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "objectDigestInfo",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of Holder
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Holder: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of Holder
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Holder: $.ComponentSpec[] = [];

/**
 * @summary Decodes an ASN.1 element into a(n) Holder
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Holder} The decoded data structure.
 */
export function _decode_Holder(el: _Element): Holder {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let baseCertificateID: OPTIONAL<IssuerSerial>;
    let entityName: OPTIONAL<GeneralNames>;
    let objectDigestInfo: OPTIONAL<ObjectDigestInfo>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        baseCertificateID: (_el: _Element): void => {
            baseCertificateID = $._decode_implicit<IssuerSerial>(
                () => _decode_IssuerSerial
            )(_el);
        },
        entityName: (_el: _Element): void => {
            entityName = $._decode_implicit<GeneralNames>(
                () => _decode_GeneralNames
            )(_el);
        },
        objectDigestInfo: (_el: _Element): void => {
            objectDigestInfo = $._decode_implicit<ObjectDigestInfo>(
                () => _decode_ObjectDigestInfo
            )(_el);
        },
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Holder,
        _extension_additions_list_spec_for_Holder,
        _root_component_type_list_2_spec_for_Holder,
        undefined
    );
    return new Holder(
        /* SEQUENCE_CONSTRUCTOR_CALL */ baseCertificateID,
        entityName,
        objectDigestInfo
    );
}

/**
 * @summary Encodes a(n) Holder into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Holder, encoded as an ASN.1 Element.
 */
export function _encode_Holder(value: Holder, _elGetter: $.ASN1Encoder<Holder>) {
    const components: _Element[] = [];
    if (value.baseCertificateID) {
        const c = $._encode_implicit(
            _TagClass.context,
            0,
            () => _encode_IssuerSerial,
            $.BER
        )(value.baseCertificateID, $.BER);
        components.push(c);
    }
    if (value.entityName) {
        const c = $._encode_implicit(
            _TagClass.context,
            1,
            () => _encode_GeneralNames,
            $.BER
        )(value.entityName, $.BER);
        components.push(c);
    }
    if (value.objectDigestInfo) {
        const c = $._encode_implicit(
            _TagClass.context,
            2,
            () => _encode_ObjectDigestInfo,
            $.BER
        )(value.objectDigestInfo, $.BER);
        components.push(c);
    }
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
