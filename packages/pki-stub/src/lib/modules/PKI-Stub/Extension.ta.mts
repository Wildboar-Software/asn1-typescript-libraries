/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    OCTET_STRING,
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    DERElement,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    octetStringFromJSON,
    octetStringToJSON,
    objectIdentifierFromJSON,
} from "../../../json.mjs";

/**
 * JSON Encoding Rules encoding of {@link Extension}.
 */
export type ExtensionJSON = {
    extnId: string;
    critical?: boolean;
    extnValue: string;
};

/**
 * @summary Extension
 * @description
 *
 * One certificate, CRL, attribute-certificate, or AVL extension.
 *
 * `extnValue` is an OCTET STRING that contains the DER encoding of the
 * extension syntax identified by `extnId` (the `der` encoding identifier is
 * `{joint-iso-itu-t asn1(1) ber-derived(2) distinguished-encoding(1)}`).
 *
 * `critical` defaults to `FALSE`. If a relying party does not recognize an
 * extension flagged critical, it shall reject the certificate (or other signed
 * object). Unrecognized non-critical extensions (and unknown elements inside
 * them) are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Extension ::= SEQUENCE {
 *   extnId     EXTENSION.&id({ExtensionSet}),
 *   critical   BOOLEAN DEFAULT FALSE,
 *   extnValue  OCTET STRING
 *     (CONTAINING EXTENSION.&ExtnType({ExtensionSet}{@extnId})
 *        ENCODED BY der),
 *   ... }
 * ```
 *
 */
export class Extension {
    constructor(
        /**
         * @summary `extnId`.
         * @public
         * @readonly
         */
        readonly extnId: OBJECT_IDENTIFIER,
        /**
         * @summary `critical`.
         * @description
         *
         * Defaults to `FALSE`. If `TRUE` and the relying party does not
         * recognize this extension, the signed object shall be rejected.
         *
         * @public
         * @readonly
         */
        readonly critical: OPTIONAL<BOOLEAN>,
        /**
         * @summary `extnValue`.
         * @description
         *
         * DER encoding of the extension syntax identified by `extnId`, wrapped
         * in an OCTET STRING.
         *
         * @public
         * @readonly
         */
        readonly extnValue: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Extension
     * @description
     *
     * This takes an `object` and converts it to a `Extension`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Extension`.
     * @returns {Extension}
     */
    public static _from_object(
        _o: { [_K in keyof Extension]: Extension[_K] }
    ): Extension {
        return new Extension(
            _o.extnId,
            _o.critical,
            _o.extnValue,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `critical`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_critical(): BOOLEAN {
        return false;
    }

    public valueElement(): DERElement {
        const el = new DERElement();
        el.fromBytes(this.extnValue);
        return el;
    }

    /**
     * @summary Convert this `Extension` to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * `extnValue` is encoded as a hexadecimal string (X.697 clause 25.3).
     * `critical` is omitted when it still has its DEFAULT value of `FALSE`.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): ExtensionJSON {
        const json: ExtensionJSON = {
            extnId: this.extnId.toJSON(),
            extnValue: octetStringToJSON(this.extnValue),
        };
        if (this.critical) {
            json.critical = this.critical;
        }
        return json;
    }

    /**
     * @summary Decode a JSON encoding of an `Extension` loosely following ITU-T X.697 (JER)
     * @param json The JSON Encoding Rules encoding of this value
     * @returns The decoded `Extension`
     * @function
     * @public
     * @static
     */
    public static fromJSON(json: ExtensionJSON): Extension {
        if (
            (typeof json !== "object")
            || (json === null)
            || (typeof json.extnId !== "string")
            || (typeof json.extnValue !== "string")
        ) {
            throw new Error("invalid Extension json");
        }
        return new Extension(
            objectIdentifierFromJSON(json.extnId),
            json.critical,
            octetStringFromJSON(json.extnValue),
        );
    }
}

/**
 * @summary The Leading Root Component Types of Extension
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Extension: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "extnId",
            false,
            $.hasTag(_TagClass.universal, 6)
        ),
        new $.ComponentSpec(
            "critical",
            true,
            $.hasTag(_TagClass.universal, 1)
        ),
        new $.ComponentSpec(
            "extnValue",
            false,
            $.hasTag(_TagClass.universal, 4)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of Extension
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Extension: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of Extension
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Extension: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) Extension
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Extension} The decoded data structure.
 */
export function _decode_Extension(el: _Element): Extension {
    let extnId!: OBJECT_IDENTIFIER;
    let critical: OPTIONAL<BOOLEAN> =
        Extension._default_value_for_critical;
    let extnValue!: OCTET_STRING;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        extnId: (_el: _Element): void => {
            extnId = $._decodeObjectIdentifier(_el);
        },
        critical: (_el: _Element): void => {
            critical = $._decodeBoolean(_el);
        },
        extnValue: (_el: _Element): void => {
            extnValue = $._decodeOctetString(_el);
        },
    };
    $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Extension,
        _extension_additions_list_spec_for_Extension,
        _root_component_type_list_2_spec_for_Extension,
        (ext: _Element): void => {
            _unrecognizedExtensionsList.push(ext);
        }
    );
    return new Extension(
        extnId,
        critical,
        extnValue,
        _unrecognizedExtensionsList
    );
}

/**
 * @summary Encodes a(n) Extension into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Extension, encoded as an ASN.1 Element.
 */
export function _encode_Extension(value: Extension): _Element {
    const components: _Element[] = [
        /* REQUIRED   */ $._encodeObjectIdentifier(
            value.extnId,
            $.BER
        ),
    ];
    if (value.critical) {
        components.push($._encodeBoolean(value.critical, $.BER));
    }
    components.push($._encodeOctetString(value.extnValue, $.BER));
    components.push(...value._unrecognizedExtensionsList);
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
