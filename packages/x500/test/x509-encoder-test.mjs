import asn1 from "asn1-ts";
import fs from "fs";
import { SIGNED } from "../../../dist/packages/x500/src/lib/modules/AuthenticationFramework/SIGNED.ta.mjs";
import { _encode_Certificate } from "../../../dist/packages/x500/src/lib/modules/AuthenticationFramework/Certificate.ta.mjs";
import { TBSCertificate } from "../../../dist/packages/x500/src/lib/modules/AuthenticationFramework/TBSCertificate.ta.mjs";
import { Version_v1 } from "../../../dist/packages/x500/src/lib/modules/AuthenticationFramework/Version.ta.mjs";
import { AlgorithmIdentifier } from "../../../dist/packages/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { Validity } from "../../../dist/packages/x500/src/lib/modules/AuthenticationFramework/Validity.ta.mjs";
import { SubjectPublicKeyInfo } from "../../../dist/packages/x500/src/lib/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
import { AttributeTypeAndValue } from "../../../dist/packages/x500/src/lib/modules/InformationFramework/AttributeTypeAndValue.ta.mjs";

const cert2 = new SIGNED(
    new TBSCertificate(
        Version_v1,
        new Uint8Array([ 1, 2, 3, 4, 5, 6, 7, 8 ]),
        new AlgorithmIdentifier(
            asn1.ObjectIdentifier.fromParts([ 1, 2, 840, 113549, 1, 1, 11 ]),
            new asn1.DERElement(
                asn1.ASN1TagClass.universal,
                asn1.ASN1Construction.primitive,
                asn1.ASN1UniversalType.nill,
                null,
            ),
        ),
        {
            rdnSequence: [
                [
                    new AttributeTypeAndValue(
                        asn1.ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]),
                        new asn1.DERElement(
                            asn1.ASN1TagClass.universal,
                            asn1.ASN1Construction.primitive,
                            asn1.ASN1UniversalType.printableString,
                            "bigboi",
                        ),
                    ),
                ],
            ],
        },
        new Validity(
            { generalizedTime: new Date() },
            { generalizedTime: new Date() },
        ),
        {
            rdnSequence: [
                [
                    new AttributeTypeAndValue(
                        asn1.ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]),
                        new asn1.DERElement(
                            asn1.ASN1TagClass.universal,
                            asn1.ASN1Construction.primitive,
                            asn1.ASN1UniversalType.printableString,
                            "lilboi",
                        ),
                    ),
                ],
            ],
        },
        new SubjectPublicKeyInfo(
            new AlgorithmIdentifier(
                asn1.ObjectIdentifier.fromParts([ 1, 2, 840, 113549, 1, 1, 1 ]),
                new asn1.DERElement(
                    asn1.ASN1TagClass.universal,
                    asn1.ASN1Construction.primitive,
                    asn1.ASN1UniversalType.nill,
                    null,
                ),
            ),
            asn1.unpackBits((asn1.DERElement.fromSequence([
                new asn1.DERElement(
                    asn1.ASN1TagClass.universal,
                    asn1.ASN1Construction.primitive,
                    asn1.ASN1UniversalType.integer,
                    123456789,
                ),
                new asn1.DERElement(
                    asn1.ASN1TagClass.universal,
                    asn1.ASN1Construction.primitive,
                    asn1.ASN1UniversalType.integer,
                    65537,
                ),
            ])).toBytes()),
        ),
        undefined,
        undefined,
        undefined,
    ),
    new AlgorithmIdentifier(
        asn1.ObjectIdentifier.fromParts([ 1, 2, 840, 113549, 1, 1, 11 ]),
        new asn1.DERElement(
            asn1.ASN1TagClass.universal,
            asn1.ASN1Construction.primitive,
            asn1.ASN1UniversalType.nill,
            null,
        ),
    ),
    new Uint8ClampedArray([ 1, 0, 1, 0, 1, 0, 1, 0 ]),
);

fs.writeFileSync("./test/output.der", _encode_Certificate(cert2).toBytes());
